import { ArrowUpRight, MapPin } from "lucide-react";

const whatsappLink =
  "https://wa.me/5581981075376?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20um%20site%20para%20o%20meu%20neg%C3%B3cio.";

const stats = [
  { value: "+30", label: "sites entregues" },
  { value: "+5", label: "anos de experiência" },
  { value: "100%", label: "clientes satisfeitos" },
];

export function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-y-2 border-white bg-black py-12 text-white sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1760px] items-center gap-8 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-12">
        <div className="reveal-on-scroll relative flex aspect-square w-full max-w-[360px] items-end overflow-hidden border-2 border-white bg-electric p-5 sm:p-7">
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-16 select-none font-black text-[20rem] leading-none tracking-[-0.12em] text-white/10"
          >
            A
          </span>
          <span
            aria-hidden="true"
            className="absolute right-6 top-6 size-4 border-2 border-lime"
          />
          <div className="relative z-10 border-l-4 border-lime pl-3">
            <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-white/70">
              Desenvolvedor web
            </span>
            <span className="mt-1 block text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Ayrton
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <div className="reveal-on-scroll">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-lime">
              <span aria-hidden="true" className="inline-block h-3 w-2 bg-lime" />
              Sobre mim
            </p>
            <h2
              id="about-heading"
              className="headline text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Ayrton — desenvolvedor web freelancer focado em resultado.
            </h2>
            <p className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/65 sm:text-sm">
              <MapPin aria-hidden="true" className="size-4 text-lime" />
              Pernambuco, Brasil
            </p>
            <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/80 sm:text-base">
              Crio sites em até 7 dias, pensados primeiro para celular e com foco em conversão —
              para apresentar sua marca com clareza e transformar visitas em oportunidades.
            </p>
          </div>

          <div className="reveal-on-scroll mt-7 grid grid-cols-3 divide-x divide-black/20 bg-lime text-black">
            {stats.map((stat) => (
              <div key={stat.label} className="flex min-h-24 flex-col justify-center px-3 py-4 sm:px-5">
                <span className="text-2xl font-black leading-none tracking-tight sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-[9px] font-black uppercase leading-tight tracking-wider sm:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-on-scroll btn-lime mt-6 inline-flex items-center gap-3 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-black focus-visible:outline-2 focus-visible:outline-white sm:text-sm"
          >
            Falar comigo
            <ArrowUpRight aria-hidden="true" className="size-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
