import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager({ routeKey }) {
  useEffect(() => {
    const bar = document.getElementById('scrollProgressBar');
    let rafId = null;

    const updateProgress = () => {
      if (!bar) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
      bar.style.transform = `scaleX(${ratio})`;
      rafId = null;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('[data-reveal]', { opacity: 1, y: 0, clearProps: 'transform' });
        return;
      }

      const items = gsap.utils.toArray('[data-reveal]');
      items.forEach((el) => {
        const delay = Number(el.getAttribute('data-reveal-delay') || 0);
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          }
        );
      });

      const isTouchOrMobile =
        window.matchMedia?.('(pointer: coarse)').matches || window.innerWidth <= 768;

      if (!isTouchOrMobile) {
        const parallaxItems = gsap.utils.toArray('[data-parallax]');
        parallaxItems.forEach((el) => {
          const yOffset = Number(el.getAttribute('data-parallax') || -24);
          gsap.to(el, {
            y: yOffset,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, [routeKey]);

  return <div id="scrollProgressBar" className="scroll-progress-bar" aria-hidden="true" />;
}
