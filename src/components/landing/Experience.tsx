const steps = [
  {
    year: "2019",
    description: "Iniciei minha jornada no desenvolvimento web aprendendo HTML, CSS e JavaScript.",
  },
  {
    year: "2020",
    description: "Trabalhei com freelancers e desenvolvi meus primeiros projetos para clientes.",
  },
  {
    year: "2021",
    description: "Entrei para uma equipe de design, focado em performance e experiência do usuário.",
  },
  {
    year: "2022",
    description: "Mergulhei em frameworks modernos como React e Next.js.",
  },
  {
    year: "2024",
    description: "Lancei minha própria marca, ajudando empresas a crescerem com soluções digitais.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-black py-8 text-white sm:py-12">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-stretch">
          {/* Timeline side */}
          <div className="flex flex-col justify-between py-2">
            {/* Header */}
            <div className="mb-8 flex items-center reveal-on-scroll">
              <span className="mr-2.5 inline-block size-3 bg-lime" aria-hidden="true" />
              <h2 className="text-sm font-black uppercase tracking-wider text-lime sm:text-base">
                EXPERIÊNCIA
              </h2>
            </div>

            {/* Timeline Row */}
            <div className="relative mt-2">
              {/* Horizontal Connecting Line */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-4 top-2 hidden h-0.5 bg-lime lg:block"
              />

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                {steps.map((step, i) => (
                  <div
                    key={step.year}
                    className="reveal-on-scroll relative flex flex-col"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Node Dot */}
                    <div className="relative z-10 mb-4 flex items-center">
                      <span
                        aria-hidden="true"
                        className="size-4 rounded-full border-2 border-lime bg-black shadow-sm"
                      />
                    </div>

                    {/* Year */}
                    <div className="headline text-2xl font-black text-white sm:text-3xl">
                      {step.year}
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-[11px] font-medium leading-relaxed text-white/80 sm:text-xs">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5+ Experience Card with Blue Corner & Hazard Stripes */}
          <div className="relative shrink-0 reveal-on-scroll">
            {/* Electric Blue geometric block behind top right */}
            <div aria-hidden="true" className="absolute right-0 top-0 size-24 bg-electric" />

            {/* Lime Card */}
            <div className="relative z-10 flex h-full flex-col justify-between bg-lime p-6 text-black sm:p-8 lg:w-72 lg:[clip-path:polygon(0_0,66%_0,100%_28%,100%_100%,0_100%)]">
              <div>
                <div className="headline text-6xl font-black tracking-tight sm:text-7xl">5+</div>
                <p className="mt-3 text-xs font-black uppercase leading-snug tracking-wider text-black">
                  ANOS DE EXPERIÊNCIA
                  <br />
                  CONSTRUINDO
                  <br />
                  EXPERIÊNCIAS DIGITAIS
                </p>
              </div>

              {/* Hazard Warning Stripes */}
              <div aria-hidden="true" className="hazard-stripes mt-6 h-3 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
