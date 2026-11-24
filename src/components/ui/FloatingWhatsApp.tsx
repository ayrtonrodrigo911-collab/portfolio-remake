import { ArrowUpRight } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
}

export function FloatingWhatsApp({ phoneNumber = "5581981075376" }: FloatingWhatsAppProps) {
  const message = encodeURIComponent(
    "Olá! Conheci o seu portfólio e gostaria de conversar sobre um projeto."
  );
  const href = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="floating-whatsapp fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      <span className="floating-whatsapp__pulse" aria-hidden="true" />
      <span
        className="floating-whatsapp__pulse floating-whatsapp__pulse--delayed"
        aria-hidden="true"
      />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="floating-whatsapp__button group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.38)] outline-none transition-all duration-300 hover:scale-110 hover:bg-[#20bd5b] hover:shadow-[0_16px_38px_rgba(37,211,102,0.55)] focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.02 3.2c-7.08 0-12.83 5.74-12.83 12.8 0 2.26.6 4.38 1.64 6.22L3.1 28.8l6.75-1.7a12.86 12.86 0 0 0 6.17 1.57h.01c7.07 0 12.82-5.74 12.82-12.8S23.1 3.2 16.02 3.2Zm0 23.35h-.01a10.6 10.6 0 0 1-5.4-1.47l-.39-.23-4 .99 1.07-3.9-.25-.4a10.55 10.55 0 0 1-1.62-5.64c0-5.83 4.76-10.57 10.61-10.57 2.83 0 5.49 1.1 7.49 3.1 2 2 3.1 4.65 3.1 7.48-.01 5.84-4.77 10.64-10.6 10.64Zm5.8-7.94c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.72.16-.21.32-.82 1.04-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.88-1.75-2.2-.18-.32-.02-.49.14-.65.15-.15.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.1 1.08-1.1 2.64 0 1.56 1.13 3.07 1.29 3.28.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
        <span className="floating-whatsapp__tooltip pointer-events-none absolute right-[calc(100%+12px)] top-1/2 flex -translate-y-1/2 translate-x-2 items-center gap-2 whitespace-nowrap rounded-xl bg-[#0F172A] px-3.5 py-2 text-xs font-bold text-white opacity-0 shadow-xl ring-1 ring-white/10 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100">
          Fale no WhatsApp
          <ArrowUpRight size={14} className="text-[#25D366]" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}

