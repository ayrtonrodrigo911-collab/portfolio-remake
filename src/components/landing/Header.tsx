import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "INÍCIO", href: "#home" },
  { label: "PROJETOS", href: "#work" },
  { label: "SOBRE", href: "#about" },
  { label: "COMO FUNCIONA", href: "#how-it-works" },
  { label: "EXPERIÊNCIA", href: "#experience" },
  { label: "CONTATO", href: "#contact" },
];

export function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <a
      href="#home"
      onClick={onNavigate}
      aria-label="PP Studio home"
      className="font-sans text-xl font-black uppercase leading-[0.85] tracking-tight text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-lime sm:text-2xl"
    >
      PP
      <br />
      STUDIO
    </a>
  );
}

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const activationLine = window.scrollY + window.innerHeight * 0.36;
        let nextSection = "home";

        for (const link of links) {
          const id = link.href.slice(1);
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top + window.scrollY <= activationLine) {
            nextSection = id;
          }
        }

        setActiveSection((current) => (current === nextSection ? current : nextSection));
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateIndicator = () => {
      const activeLink = linkRefs.current[activeSection];
      if (!activeLink) return;

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicator({ left: linkRect.left - navRect.left, width: linkRect.width });
    };

    updateIndicator();

    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateIndicator) : null;
    resizeObserver?.observe(nav);
    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeSection]);

  return (
    <header className="header-enter sticky top-0 z-50 w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-14 max-w-[1760px] items-center justify-between px-4 sm:h-16 sm:px-8 lg:px-12">
        <Logo onNavigate={() => setActiveSection("home")} />

        <nav
          ref={navRef}
          aria-label="Navegação principal"
          className="relative hidden h-full items-center gap-6 md:flex lg:gap-10"
        >
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;

            return (
              <a
                key={link.label}
                ref={(element) => {
                  linkRefs.current[id] = element;
                }}
                href={link.href}
                onClick={() => setActiveSection(id)}
                aria-current={isActive ? "location" : undefined}
                className={`relative z-10 text-xs font-bold uppercase tracking-wider transition-colors duration-300 hover:text-lime focus-visible:outline-2 focus-visible:outline-lime ${
                  isActive ? "text-lime" : "text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[14px] left-0 h-0.5 bg-lime transition-[transform,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: indicator.width,
              opacity: indicator.width ? 1 : 0,
              transform: `translateX(${indicator.left}px)`,
            }}
          />
        </nav>

        <a
          href="https://wa.me/5581981075376?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lime btn-flash relative isolate flex items-center gap-1.5 overflow-hidden px-4 py-2 text-xs font-black uppercase tracking-wide text-black focus-visible:outline-2 focus-visible:outline-white"
        >
          <span className="relative z-10">VAMOS CRIAR</span>
          <ArrowUpRight aria-hidden="true" className="relative z-10 size-3.5 stroke-[3]" />
        </a>
      </div>
    </header>
  );
}
