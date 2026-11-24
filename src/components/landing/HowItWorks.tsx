import { ArrowRight, MessageSquare, Paintbrush, Rocket, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "CONVERSA INICIAL",
    description:
      "Você me conta sobre o seu negócio, o que precisa e quais são seus objetivos. Sem formulários complicados — só uma conversa direta pelo WhatsApp.",
    tag: "Rápido & Sem Burocracia",
  },
  {
    number: "02",
    icon: Search,
    title: "ANÁLISE & PROPOSTA",
    description:
      "Estudo o seu nicho, concorrentes e o que faz sentido para o seu negócio. Te envio uma proposta clara com prazo e valor — sem surpresas no final.",
    tag: "Transparência Total",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "DESIGN & DESENVOLVIMENTO",
    description:
      "Crio o seu site com identidade visual forte, responsivo para celular, rápido e otimizado. Você acompanha o progresso e aprova cada etapa.",
    tag: "Pixel-Perfect",
  },
  {
    number: "04",
    icon: Rocket,
    title: "ENTREGA & SUPORTE",
    description:
      "Site no ar em até 7 dias úteis. Você recebe treinamento para gerenciar e suporte pós-entrega. Resultado garantido ou refazemos sem custo extra.",
    tag: "Entrega em 7 dias",
  },
];

const whatsappLink =
  "https://wa.me/5581981075376?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper py-10 sm:py-16">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 reveal-on-scroll">
          <div>
            <div className="mb-2 flex items-center gap-2.5">
              <span aria-hidden="true" className="inline-block h-4 w-2 bg-electric" />
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-electric">
                Do primeiro contato à entrega
              </p>
            </div>
            <h2 className="headline text-2xl font-black uppercase text-black sm:text-3xl lg:text-4xl">
              COMO É TRABALHAR<br className="hidden sm:block" /> COMIGO
            </h2>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-electric sm:text-sm"
          >
            INICIAR AGORA
            <ArrowRight
              aria-hidden="true"
              className="size-4 stroke-[2.5] transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={`reveal-on-scroll group relative flex flex-col overflow-hidden border p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  isEven
                    ? "border-black bg-black text-white"
                    : "border-black/15 bg-white text-black"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Large number background */}
                <span
                  aria-hidden="true"
                  className={`absolute right-4 top-3 font-black text-[5rem] leading-none tracking-tighter select-none ${
                    isEven ? "text-white/8" : "text-black/6"
                  }`}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={`mb-5 flex size-11 items-center justify-center ${
                    isEven ? "bg-lime text-black" : "bg-electric text-white"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5 stroke-[2]" />
                </div>

                {/* Step number small label */}
                <span
                  className={`mb-2 text-[10px] font-black uppercase tracking-[0.2em] ${
                    isEven ? "text-white/60" : "text-electric"
                  }`}
                >
                  Etapa {step.number}
                </span>

                {/* Title */}
                <h3 className="mb-3 text-sm font-black uppercase leading-tight sm:text-base">
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`flex-1 text-xs font-medium leading-relaxed sm:text-sm ${
                    isEven ? "text-white/80" : "text-black/70"
                  }`}
                >
                  {step.description}
                </p>

                {/* Tag badge */}
                <span
                  className={`mt-5 inline-block self-start px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${
                    isEven ? "bg-lime text-black" : "bg-black text-white"
                  }`}
                >
                  {step.tag}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-black/10 bg-electric p-5 reveal-on-scroll sm:p-7">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
              Pronto para começar?
            </p>
            <p className="mt-1 text-lg font-black uppercase text-white sm:text-xl">
              MEU SITE ESTÁ PRONTO EM ATÉ{" "}
              <span className="text-lime">7 DIAS ÚTEIS.</span>
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-lime px-5 py-3.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-white focus-visible:outline-2 focus-visible:outline-white sm:text-sm"
          >
            <span>QUERO MEU SITE AGORA</span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 stroke-[3] transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

