import { useEffect, useState } from "react";

/**
 * Natural, elegant minimal preloader.
 * - Smooth, organic progression matching the authentic portfolio feel
 * - Clean brutalist typography with subtle pulse and fluid ease-out exit
 */
export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Natural easing: fast start, smooth deceleration, natural finish
    const startTime = performance.now();
    const duration = 1100; // Snappy & natural ~1.1s total

    let animationId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic for natural progression
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.min(Math.round(eased * 100), 100);

      setProgress(current);

      if (t < 1) {
        animationId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => setIsRemoved(true), 600);
        }, 180);
      }
    };

    animationId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationId);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between bg-black px-6 py-8 sm:px-12 sm:py-12 text-white transition-all duration-600 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform ${
        isDone ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
      aria-label="Carregando página"
      role="status"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-black uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="inline-block size-2 rounded-full bg-lime animate-pulse" />
          <span className="text-white font-bold tracking-[0.2em]">PP / STUDIO</span>
        </div>
        <span className="text-zinc-500 text-[10px] tracking-[0.25em]">2026 EDITION</span>
      </div>

      {/* Center – Natural, sleek brutalist display */}
      <div className="my-auto flex flex-col items-start max-w-xl">
        <div className="flex items-baseline gap-3">
          <span className="font-black text-7xl sm:text-9xl md:text-[140px] leading-none tracking-tight text-white tabular-nums">
            {progress}
          </span>
          <span className="text-electric font-black text-4xl sm:text-6xl">%</span>
        </div>

        {/* Minimalist sleek progress line */}
        <div className="mt-6 w-full h-[2px] bg-white/15 overflow-hidden">
          <div
            className="h-full bg-electric transition-all duration-75 ease-out shadow-[0_0_12px_var(--electric)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-4 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500">
        <span>RECIFE, PE</span>
        <span className="text-lime">CRIANDO EXPERIÊNCIAS DIGITAIS</span>
      </div>
    </div>
  );
}
