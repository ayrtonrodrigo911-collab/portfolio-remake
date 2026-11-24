import { ArrowRight, Crosshair } from "lucide-react";
import man from "@/assets/hero-man.png";
import limeX from "@/assets/hero-lime-x.png";
import { RotatingGlobe } from "@/components/ui/RotatingGlobe";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex flex-col justify-center overflow-hidden bg-electric md:h-[calc(100dvh-3.5rem)] md:max-h-[calc(100dvh-3.5rem)] min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)]"
    >
      <div className="mx-auto grid size-full max-w-none md:grid-cols-[1.05fr_1.15fr]">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-copy relative z-20 flex flex-col justify-center px-6 py-4 sm:px-10 lg:px-16 xl:px-20">
          {/* Brutalist cross icon */}
          <div aria-hidden="true" className="hero-symbol-enter mb-2 sm:mb-4">
            <svg viewBox="0 0 24 24" className="hero-mark size-5 sm:size-6 text-white" fill="currentColor">
              <rect x="9" y="9" width="6" height="6" />
              <rect className="hero-mark-arm hero-mark-nw" x="3" y="3" width="6" height="6" />
              <rect className="hero-mark-arm hero-mark-sw" x="3" y="15" width="6" height="6" />
              <rect className="hero-mark-arm hero-mark-se" x="15" y="15" width="6" height="6" />
              <rect className="hero-mark-arm hero-mark-ne" x="15" y="3" width="6" height="6" />
            </svg>
          </div>

          <h1
            className="hero-headline-enter headline-hero font-black text-[clamp(2.2rem,5vw,5.5rem)] xl:text-[6.2rem] leading-[0.88] text-white tracking-[-0.04em]"
          >
            <span className="block">EU CRIO.</span>
            <span className="block">EU PROGRAMO.</span>
            <span className="block text-white">EU ELEVO</span>
            <span className="block">MARCAS.</span>
          </h1>

          <p
            className="hero-description-enter mt-3 max-w-lg text-xs font-semibold leading-snug text-white/85 sm:mt-5 sm:text-sm lg:text-base"
          >
            Sou Ayrton — Desenvolvedor Web de Pernambuco. Crio sites que vendem, convertem e
            representam de verdade a sua marca.
          </p>

          <div
            className="hero-actions-enter mt-4 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <a
              href="#work"
              className="hero-projects-cta flex items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-white"
            >
              <span>VER PROJETOS</span>
              <ArrowRight aria-hidden="true" className="size-4 stroke-[2.5]" />
            </a>
            <a
              href="https://wa.me/5581981075376?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime hero-start-cta flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-wide text-black focus-visible:outline-2 focus-visible:outline-white"
            >
              INICIAR PROJETO
            </a>
          </div>

          <p className="hero-actions-enter mt-3 flex flex-wrap items-center gap-x-1.5 text-[10px] font-medium text-white/70 sm:mt-4">
            <span>+30 Sites Entregues</span>
            <span aria-hidden="true">·</span>
            <span>+5 Anos de Experiência</span>
            <span aria-hidden="true">·</span>
            <span>100% Satisfação</span>
          </p>
        </div>

        {/* Right Column: Visual Elements */}
        <div className="relative min-h-[18rem] size-full overflow-hidden bg-electric md:min-h-0">
          {/* Layered white lightning bolt with a cool blue extruded edge */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="hero-bolt-enter pointer-events-none absolute inset-0 z-0 size-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="bolt-face" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.56" stopColor="#f4f7ff" />
                <stop offset="1" stopColor="#cbd8ff" />
              </linearGradient>
            </defs>
            <path d="M 32 0 H 78 L 58 31 H 88 L 30 100 L 43 62 L 0 56 Z" fill="#111b66" transform="translate(3 4)" />
            <path d="M 32 0 H 78 L 58 31 H 88 L 30 100 L 43 62 L 0 56 Z" fill="url(#bolt-face)" />
            <path d="M 33 2 H 72 L 53 32 H 80 L 31 88 L 46 60 L 5 54 Z" fill="none" stroke="#ffffff" strokeOpacity=".6" strokeWidth="1.2" />
          </svg>

          {/* Distressed lime X behind the man's shoulder */}
          <img
            src={limeX}
            alt=""
            aria-hidden="true"
            className="hero-accent-float pointer-events-none absolute right-[9%] top-[4%] z-[5] w-[56%] max-w-[440px] -rotate-3 select-none object-contain opacity-95"
          />

          {/*
            Man Portrait: positioned directly over the center of the lightning backdrop,
            so the blue bolt sits distinctly BEHIND his head, sunglasses, neck and shoulder.
          */}
          <img
            src={man}
            alt="Retrato de um desenvolvedor olhando para cima"
            width={896}
            height={1024}
            className="hero-portrait-enter pointer-events-none absolute bottom-0 left-[2%] sm:left-[5%] md:left-[2%] lg:left-0 z-10 h-[98%] max-h-full w-auto max-w-none object-contain object-bottom grayscale"
          />

          {/* Top-Right Info Overlay */}
          <div className="hero-art-info absolute right-6 top-6 z-20 hidden flex-col items-end text-right text-[10px] font-black uppercase tracking-wider text-white sm:flex lg:right-10 lg:top-8">
            <Crosshair aria-hidden="true" className="hero-crosshair-anim mb-4 size-5 stroke-[2]" />
            <span className="leading-tight">DESIGN UI/UX</span>
            <span className="leading-tight">DESENVOLVIMENTO WEB</span>
            <span className="leading-tight">ESTRATÉGIA DE MARCA</span>
            <div className="hero-stripes-wave mt-8 flex items-center justify-end font-black tracking-[0.25em]" aria-hidden="true">
              <span style={{ animationDelay: "0ms" }}>/</span>
              <span style={{ animationDelay: "180ms" }}>/</span>
              <span style={{ animationDelay: "360ms" }}>/</span>
              <span style={{ animationDelay: "540ms" }}>/</span>
              <span style={{ animationDelay: "720ms" }}>/</span>
              <span style={{ animationDelay: "900ms" }}>/</span>
            </div>
            {/* Realistic 3D wireframe rotating globe */}
            <RotatingGlobe className="mt-12 size-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
