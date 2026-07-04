import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide entrance animations.
 * Elements opt in via data attributes; CSS hides them only when html.js is set,
 * and prefers-reduced-motion shows everything statically.
 */
export function initAnimations(): void {
  // If the page loads in a hidden/background tab, rAF is throttled and entrance
  // tweens would leave content invisible until they finish. Skip the flourish and
  // show everything — the page must never look broken when the user switches back.
  if (document.hidden) {
    gsap.set('[data-hero-line], [data-hero-fade], [data-reveal], [data-spectrum-label]', {
      autoAlpha: 1,
    });
    return;
  }

  const mm = gsap.matchMedia();

  mm.add(
    {
      motionOk: '(prefers-reduced-motion: no-preference)',
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { reduceMotion } = context.conditions as { reduceMotion: boolean };

      if (reduceMotion) {
        gsap.set('[data-hero-line], [data-hero-fade], [data-reveal]', { opacity: 1, clearProps: 'transform' });
        return;
      }

      // --- hero entrance -------------------------------------------------
      const heroLines = gsap.utils.toArray<HTMLElement>('[data-hero-line]');
      if (heroLines.length) {
        gsap.fromTo(
          heroLines,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.09,
            delay: 0.1,
          }
        );
      }
      const heroFades = gsap.utils.toArray<HTMLElement>('[data-hero-fade]');
      if (heroFades.length) {
        gsap.fromTo(
          heroFades,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1.1, ease: 'power2.out', delay: 0.55 }
        );
      }

      // --- scroll-triggered reveals --------------------------------------
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: 'power2.out',
              stagger: 0.08,
              overwrite: true,
            }
          );
        },
      });

      // --- AIRS spectrum visualization ------------------------------------
      const spectrum = document.querySelector<HTMLElement>('[data-spectrum]');
      if (spectrum) {
        const bars = spectrum.querySelectorAll<HTMLElement>('[data-spectrum-bar]');
        const labels = spectrum.querySelectorAll<HTMLElement>('[data-spectrum-label]');
        gsap.set(bars, { scaleY: 0, transformOrigin: 'bottom center' });
        gsap.set(labels, { autoAlpha: 0, y: 8 });

        gsap
          .timeline({
            scrollTrigger: { trigger: spectrum, start: 'top 78%', once: true },
          })
          .to(bars, {
            scaleY: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.07,
          })
          .to(labels, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.05 }, '-=0.45');
      }

      // ScrollTrigger positions can shift once webfonts land
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }
    }
  );
}
