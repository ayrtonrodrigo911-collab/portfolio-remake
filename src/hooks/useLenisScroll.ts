import { useEffect } from "react";
import type Lenis from "lenis";

export function useLenisScroll() {
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (prefersReducedMotion) return;

    let cancelled = false;
    let animationFrame = 0;
    let lenis: Lenis | null = null;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        anchors: true,
        autoRaf: false,
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      const animate = (time: number) => {
        lenis?.raf(time);
        animationFrame = window.requestAnimationFrame(animate);
      };

      animationFrame = window.requestAnimationFrame(animate);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrame);
      lenis?.destroy();
    };
  }, []);
}
