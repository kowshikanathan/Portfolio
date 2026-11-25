import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

/**
 * CustomCursor — Zero-rerender ref-driven cursor follower.
 * Enabled only on fine-pointer desktops without prefers-reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia?.('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!mq?.matches || window.innerWidth < 768) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const state = {
      targetX: -100,
      targetY: -100,
      ringX: -100,
      ringY: -100,
      visible: false,
    };

    let animId = null;

    const tick = () => {
      state.ringX += (state.targetX - state.ringX) * 0.18;
      state.ringY += (state.targetY - state.ringY) * 0.18;

      dot.style.transform = `translate3d(${state.targetX}px, ${state.targetY}px, 0)`;
      ring.style.transform = `translate3d(${state.ringX}px, ${state.ringY}px, 0)`;

      if (state.visible) {
        animId = window.requestAnimationFrame(tick);
      } else {
        animId = null;
      }
    };

    const onMouseMove = (e) => {
      state.targetX = e.clientX;
      state.targetY = e.clientY;
      if (!state.visible) {
        state.visible = true;
        state.ringX = e.clientX;
        state.ringY = e.clientY;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        if (!animId) animId = window.requestAnimationFrame(tick);
      }
    };

    const onMouseLeave = () => {
      state.visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;
      const isInteractive = Boolean(
        target.closest('a, button, [role="button"], .toolkit-tool-item, .project-featured-visual')
      );
      const isInput = Boolean(target.closest('input, textarea, select'));
      ring.classList.toggle('is-hover', isInteractive && !isInput);
      dot.classList.toggle('is-hover', isInteractive && !isInput);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      if (animId) window.cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
