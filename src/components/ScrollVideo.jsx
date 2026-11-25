import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import './ScrollVideo.css';

// Coordinates single-active-video playback across sections
const ACTIVE_VIDEO_EVENT = 'portfolio:scroll-video-activate';

/**
 * ScrollVideo — Reusable viewport-triggered cinematic video player.
 * - Uses IntersectionObserver to start playback at ~40% visibility, pause on leave,
 *   and restart from the beginning whenever the visitor returns to the section.
 * - Plays once per section visit and holds the final frame until scrolled away.
 * - Preloads the hero video immediately and prioritizes upcoming videos via a
 *   viewport-proximity preload observer (with preload="metadata").
 * - Pauses automatically when the browser tab becomes hidden.
 * - Respects prefers-reduced-motion with a static poster fallback.
 */
export default function ScrollVideo({
  src,
  poster,
  fallbackPoster,
  mode = 'scroll',
  ariaLabel,
  className = '',
  revealThresholdTime = 1.25,
  onRevealTrigger,
  onVideoEnded,
  aspectRatio = '16 / 9',
  fit = 'contain',
  objectPosition = 'center bottom',
  seamless = false,
  showPlayFallback = false,
}) {
  const instanceId = useId();
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const inViewRef = useRef(false);
  const hasEndedRef = useRef(false);
  const heroInitialPlayRef = useRef(false);
  const pausedByTabRef = useRef(false);
  const revealFiredRef = useRef(false);

  const [shouldPreloadUpcoming, setShouldPreloadUpcoming] = useState(mode === 'hero');
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const fireReveal = useCallback(() => {
    if (!revealFiredRef.current) {
      revealFiredRef.current = true;
      onRevealTrigger?.();
    }
  }, [onRevealTrigger]);

  // Listen to prefers-reduced-motion changes
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return;

    const handleMotionChange = () => {
      setReducedMotion(mq.matches);
      if (mq.matches) {
        fireReveal();
      }
    };

    handleMotionChange();
    mq.addEventListener?.('change', handleMotionChange);
    return () => mq.removeEventListener?.('change', handleMotionChange);
  }, [fireReveal]);

  // Prioritize buffering upcoming section videos slightly before they enter the viewport
  useEffect(() => {
    if (mode === 'hero' || reducedMotion || shouldPreloadUpcoming) return;
    const el = containerRef.current;
    if (!el) return;

    const preloadObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldPreloadUpcoming(true);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: '480px 0px' }
    );

    preloadObserver.observe(el);
    return () => preloadObserver.disconnect();
  }, [mode, reducedMotion, shouldPreloadUpcoming]);

  const safePlay = useCallback(
    (resetToStart) => {
      const video = videoRef.current;
      if (!video || reducedMotion) return;

      if (resetToStart) {
        try {
          video.currentTime = 0;
        } catch {
          // Ignore seek errors if metadata is not yet decoded
        }
      }

      window.dispatchEvent(
        new CustomEvent(ACTIVE_VIDEO_EVENT, { detail: { id: instanceId } })
      );

      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch((err) => {
          if (err?.name === 'AbortError') return;
          setAutoplayBlocked(true);
          fireReveal();
        });
      }
    },
    [fireReveal, instanceId, reducedMotion]
  );

  // Pause this video if another section video starts playing simultaneously
  useEffect(() => {
    const onAnotherVideoActivate = (event) => {
      if (event.detail?.id === instanceId) return;
      const video = videoRef.current;
      if (video && !video.paused) {
        video.pause();
      }
    };

    window.addEventListener(ACTIVE_VIDEO_EVENT, onAnotherVideoActivate);
    return () => window.removeEventListener(ACTIVE_VIDEO_EVENT, onAnotherVideoActivate);
  }, [instanceId]);

  // Pause when browser tab becomes inactive, resume if active visit hadn't ended
  useEffect(() => {
    const onVisibilityChange = () => {
      const video = videoRef.current;
      if (!video || reducedMotion) return;

      if (document.hidden) {
        if (!video.paused) {
          pausedByTabRef.current = true;
          video.pause();
        }
      } else if (pausedByTabRef.current) {
        pausedByTabRef.current = false;
        if (inViewRef.current && !hasEndedRef.current) {
          safePlay(false);
        }
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [reducedMotion, safePlay]);

  // Hero initial autoplay + safety reveal timer (only when landing near top)
  useEffect(() => {
    if (mode !== 'hero' || reducedMotion) return;

    if (window.scrollY < window.innerHeight * 0.6) {
      heroInitialPlayRef.current = true;
      inViewRef.current = true;
      hasEndedRef.current = false;
      safePlay(false);
    }

    const safetyTimer = setTimeout(() => {
      fireReveal();
    }, 2400);

    return () => clearTimeout(safetyTimer);
  }, [mode, reducedMotion, safePlay, fireReveal]);

  // IntersectionObserver controlling ~40% enter playback, leave pause, and return replay
  useEffect(() => {
    if (reducedMotion) return;
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const isTallOnSmallScreen = entry.boundingClientRect.height > window.innerHeight * 1.1;
          const enterRatio = isTallOnSmallScreen ? 0.28 : 0.4;
          const isEntering = entry.isIntersecting && entry.intersectionRatio >= enterRatio;
          const hasLeft = !entry.isIntersecting || entry.intersectionRatio <= 0.05;

          if (isEntering) {
            if (!inViewRef.current) {
              inViewRef.current = true;
              hasEndedRef.current = false;
              pausedByTabRef.current = false;

              // Skip redundant seek on hero's initial mount play
              const shouldReset = !(mode === 'hero' && heroInitialPlayRef.current && video.currentTime < 0.4);
              heroInitialPlayRef.current = false;
              if (!document.hidden) {
                safePlay(shouldReset);
              }
            }
          } else if (hasLeft) {
            if (inViewRef.current) {
              inViewRef.current = false;
              pausedByTabRef.current = false;
              heroInitialPlayRef.current = false;
              if (!video.paused) {
                video.pause();
              }
            }
          }
        }
      },
      {
        threshold: [0, 0.05, 0.28, 0.4],
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (!video.paused) {
        video.pause();
      }
    };
  }, [mode, reducedMotion, safePlay]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || revealFiredRef.current) return;
    if (video.currentTime >= revealThresholdTime) {
      fireReveal();
    }
  };

  const handleEnded = () => {
    hasEndedRef.current = true;
    fireReveal();
    onVideoEnded?.();
  };

  const handleManualPlay = () => {
    setAutoplayBlocked(false);
    hasEndedRef.current = false;
    inViewRef.current = true;
    safePlay(true);
  };

  const showStaticFallback = reducedMotion || autoplayBlocked;
  const activeStaticSrc = fallbackPoster || poster;

  return (
    <div
      ref={containerRef}
      className={`scroll-video-stage ${seamless ? 'is-seamless' : ''} ${className} ${videoReady ? 'is-ready' : ''}`}
      style={{
        '--stage-aspect': aspectRatio,
        '--video-fit': fit,
        '--video-pos': objectPosition,
      }}
    >
      {!seamless && <div className="scroll-video-ambient" aria-hidden="true" />}

      {/* Static poster backdrop ensures zero black flashes before first frame decodes */}
      {!showStaticFallback && poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="scroll-video-poster-layer"
          loading={mode === 'hero' ? 'eager' : 'lazy'}
        />
      )}

      {showStaticFallback ? (
        <img
          src={activeStaticSrc}
          alt={ariaLabel || '3D character studio scene'}
          className="scroll-video-fallback"
          loading={mode === 'hero' ? 'eager' : 'lazy'}
        />
      ) : (
        <video
          ref={videoRef}
          className="scroll-video-el"
          src={src}
          poster={poster}
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback"
          preload={mode === 'hero' || shouldPreloadUpcoming ? 'auto' : 'metadata'}
          aria-label={ariaLabel}
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
      )}

      <div className="scroll-video-vignette" aria-hidden="true" />

      {autoplayBlocked && showPlayFallback && !reducedMotion && (
        <button
          type="button"
          className="scroll-video-play-fallback"
          onClick={handleManualPlay}
          aria-label="Play character intro animation"
        >
          Play Intro
        </button>
      )}
    </div>
  );
}
