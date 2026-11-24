import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  X as XIcon,
  Youtube,
} from "lucide-react";
import building from "@/assets/building.jpg";
import { Logo } from "./Header";

const WHATSAPP_NUMBER = "5581981075376";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .62.05.9.14V8.9a6.34 6.34 0 0 0-.9-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.16 8.16 0 0 0 4.76 1.52V6.78a4.85 4.85 0 0 1-1-.09z" />
    </svg>
  );
}

const INSTAGRAM_URL = "https://www.instagram.com/ayrton.designerweb";
const TIKTOK_URL = "https://www.tiktok.com/@ayrtonrodrigoyt";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCb3bxN6Tdx00vSYYvxDjj0A";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Youtube, label: "YouTube", href: YOUTUBE_URL },
  { icon: TikTokIcon, label: "TikTok", href: TIKTOK_URL },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: XIcon, label: "X", href: "https://x.com" },
  { icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
];

export function Footer() {
  return (
    <footer id="contact" className="w-full">
      <div className="mx-auto max-w-[1760px] px-4 pb-8 sm:px-8 lg:px-12">
        <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
          <div className="border border-black/10 bg-electric p-6 text-white sm:p-10 lg:p-12 reveal-on-scroll">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-white/70">
              Vamos conversar sobre o seu próximo site
            </p>
            <h2 className="headline text-4xl font-black sm:text-5xl lg:text-6xl">
              VAMOS CONSTRUIR
              <br />
              ALGO
              <br />
              <span className="text-lime">INCRÍVEL JUNTOS.</span>
            </h2>

            <p className="mt-5 max-w-xl text-xs font-medium leading-relaxed text-white/80 sm:text-sm">
              Sites institucionais, landing pages e lojas virtuais para apresentar seu negócio,
              conquistar confiança e transformar visitas em oportunidades.
            </p>

            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para o meu projeto.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 bg-lime px-5 py-3.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-white focus-visible:outline-2 focus-visible:outline-white sm:text-sm"
            >
              <span>SOLICITAR ORÇAMENTO NO WHATSAPP</span>
              <ArrowRight
                aria-hidden="true"
                className="size-4 stroke-[3] transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Direct Contact Channels Grid */}
            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                Canais Diretos & Redes
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {/* WhatsApp */}
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Olá! Gostaria de conversar sobre um projeto.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/15 bg-white/5 p-3 text-xs font-bold text-white transition-all hover:border-lime hover:bg-white/10 hover:text-lime"
                >
                  <div className="flex items-center gap-3">
                    <Phone aria-hidden="true" className="size-4 shrink-0 text-lime" />
                    <span>(81) 9 8107-5376</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded bg-[#25D366]/20 px-2 py-0.5 text-[9px] font-bold text-[#25D366]">
                    WhatsApp
                  </span>
                </a>

                {/* E-mail */}
                <a
                  href="mailto:dc0ce3a511@proton.me"
                  className="group flex items-center justify-between border border-white/15 bg-white/5 p-3 text-xs font-bold text-white transition-all hover:border-lime hover:bg-white/10 hover:text-lime"
                >
                  <div className="flex items-center gap-3">
                    <Mail aria-hidden="true" className="size-4 shrink-0 text-lime" />
                    <span className="truncate">dc0ce3a511@proton.me</span>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="size-3.5 opacity-60 transition-transform group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/15 bg-white/5 p-3 text-xs font-bold text-white transition-all hover:border-lime hover:bg-white/10 hover:text-lime"
                >
                  <div className="flex items-center gap-3">
                    <Instagram aria-hidden="true" className="size-4 shrink-0 text-lime" />
                    <span>@ayrton.designerweb</span>
                  </div>
                  <span className="text-[10px] text-white/60 group-hover:text-lime">Instagram ↗</span>
                </a>

                {/* TikTok */}
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/15 bg-white/5 p-3 text-xs font-bold text-white transition-all hover:border-lime hover:bg-white/10 hover:text-lime"
                >
                  <div className="flex items-center gap-3">
                    <TikTokIcon className="size-4 shrink-0 text-lime" />
                    <span>@ayrtonrodrigoyt</span>
                  </div>
                  <span className="text-[10px] text-white/60 group-hover:text-lime">TikTok ↗</span>
                </a>

                {/* YouTube */}
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/15 bg-white/5 p-3 text-xs font-bold text-white transition-all hover:border-lime hover:bg-white/10 hover:text-lime sm:col-span-2"
                >
                  <div className="flex items-center gap-3">
                    <Youtube aria-hidden="true" className="size-4 shrink-0 text-lime" />
                    <span>Canal no YouTube</span>
                  </div>
                  <span className="text-[10px] text-white/60 group-hover:text-lime">Assistir Vídeos ↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden border border-black/10 bg-black sm:min-h-[400px] reveal-on-scroll">
            <img
              src={building}
              alt="Fachada moderna representando projetos digitais bem construídos"
              loading="lazy"
              className="absolute inset-0 size-full object-cover grayscale transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/10" />
            <div aria-hidden="true" className="absolute right-0 top-0 size-12 bg-lime" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-lime">
                Design & desenvolvimento web
              </p>
              <h3 className="headline mt-2 max-w-sm text-2xl font-black uppercase sm:text-3xl">
                UMA PRESENÇA DIGITAL COM A CARA DA SUA MARCA.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-4 text-white">
        <div className="mx-auto flex max-w-[1760px] flex-wrap items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-6">
            <Logo />
            <p className="border-l border-white/20 pl-6 text-xs font-medium text-white/70">
              © 2026 PP Studio. Todos os direitos reservados.
            </p>
          </div>

          <nav aria-label="Redes sociais" className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-7 items-center justify-center text-white transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-lime"
              >
                <Icon aria-hidden="true" className="size-4 stroke-[2]" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
