import { useEffect } from 'react';

/**
 * InteractiveEffects — Global restrained magnetic CTA pull & interactive
 * card border illumination via CSS variables (--glow-x, --glow-y).
 * Zero React re-renders; disabled on touch devices & prefers-reduced-motion.
 */
export default function InteractiveEffects({ routeKey }) {
  useEffect(() => {
    const mq = window.matchMedia?.('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!mq?.matches || window.innerWidth < 768) return;

    const magneticTargets = Array.from(
      document.querySelectorAll('.btn-primary, .btn-secondary, .nav-resume-btn')
    );
    const cardTargets = Array.from(
      document.querySelectorAll(
        '.toolkit-tool-item, .resume-edu-card, .case-feature-card, .case-process-card, .case-point-card, .case-overview-card, .greeto-case-shell .interactive-glow-card, .cs2-shell .interactive-glow-card'
      )
    );

    const cleanups = [];

    magneticTargets.forEach((btn) => {
      const onMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        const moveX = relX * 10;
        const moveY = relY * 8;
        btn.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;
      };

      const onLeave = () => {
        btn.style.transform = '';
      };

      btn.addEventListener('mousemove', onMove, { passive: true });
      btn.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', onMove);
        btn.removeEventListener('mouseleave', onLeave);
        btn.style.transform = '';
      });
    });

    cardTargets.forEach((card) => {
      card.classList.add('interactive-glow-card');

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--glow-x', `${x.toFixed(1)}px`);
        card.style.setProperty('--glow-y', `${y.toFixed(1)}px`);
      };

      card.addEventListener('mousemove', onMove, { passive: true });
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [routeKey]);

  return null;
}

