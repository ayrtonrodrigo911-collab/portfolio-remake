import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  Home,
  LayoutGrid,
  Package,
  Settings,
  Star,
  Users,
} from "lucide-react";

const caseStudyList = [
  {
    number: "01",
    title: "NEXORA",
    description: "Site moderno para agência de design.",
    href: "#case-studies",
  },
  {
    number: "02",
    title: "SPARK SAAS",
    description: "Plataforma SaaS de alta performance.",
    href: "#case-studies",
  },
  {
    number: "03",
    title: "VELOCE STORE",
    description: "Uma experiência de e-commerce.",
    href: "#case-studies",
  },
];

const stats = [
  { value: "180%", label: "Aumento de Performance" },
  { value: "2.4x", label: "Carregamento Mais Rápido" },
  { value: "95%", label: "Avaliação dos Clientes" },
];

const sidebarItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Users, label: "Clientes", active: false },
  { icon: Package, label: "Produtos", active: false },
  { icon: Settings, label: "Config.", active: false },
];

const sources = [
  { label: "Direto", value: "42%" },
  { label: "Google Search", value: "34%" },
  { label: "Redes Sociais", value: "24%" },
];

const chartPoints = [
  { day: "Seg", x: 20, y: 56 },
  { day: "Ter", x: 50, y: 46 },
  { day: "Qua", x: 80, y: 52 },
  { day: "Qui", x: 110, y: 35 },
  { day: "Sex", x: 140, y: 40 },
  { day: "Sáb", x: 170, y: 25 },
  { day: "Dom", x: 200, y: 15 },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-paper py-8 sm:py-12">
      <div className="mx-auto grid max-w-[1760px] gap-8 px-4 sm:px-8 lg:grid-cols-[1fr_2.4fr] lg:gap-10 lg:px-12">
        {/* Left Column: List of Case Studies */}
        <div className="flex flex-col justify-center py-4 reveal-on-scroll">
          <h2 className="mb-6 text-sm font-black uppercase tracking-wider text-electric sm:text-base">
            ESTUDOS DE CASO
          </h2>

          <div className="divide-y divide-black/15">
            {caseStudyList.map((item, i) => (
              <a
                key={item.number}
                href={item.href}
                className="group reveal-on-scroll flex items-center justify-between py-5 transition-colors focus-visible:outline-2 focus-visible:outline-electric"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-5 sm:gap-7">
                  <span className="headline text-3xl font-black text-black sm:text-4xl">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-black uppercase text-black sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-graphite sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 stroke-[2] text-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Featured Spark SaaS Hero Card */}
        <div className="reveal-on-scroll relative overflow-hidden bg-electric p-6 text-white sm:p-10 lg:[clip-path:polygon(42px_0,100%_0,100%_100%,0_100%,0_42px)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:items-center">
            {/* Info Part */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-white/80">
                ESTUDO DE CASO TÉCNICO
              </p>
              <h3 className="headline mt-2 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                SPARK SAAS
              </h3>
              <p className="mt-4 max-w-sm text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                Uma plataforma SaaS escalável com dashboard moderno e integrações poderosas.
              </p>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/20 pt-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="headline text-2xl font-black text-white sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[9px] font-bold uppercase leading-tight text-white/80 sm:text-[10px]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="btn-lime inline-flex items-center gap-3 px-5 py-3 text-xs font-black uppercase tracking-wide text-black focus-visible:outline-2 focus-visible:outline-white sm:text-sm"
                >
                  <span>LER ESTUDO COMPLETO</span>
                  <ArrowRight aria-hidden="true" className="size-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Dashboard UI Card with Starburst Badge */}
            <div className="relative mt-4 sm:mt-0">
              {/* Starburst Project Highlight Badge */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-5 z-20 flex size-20 flex-col items-center justify-center bg-black p-1 text-center text-[8px] font-black uppercase leading-tight text-white shadow-lg [clip-path:polygon(50%_0%,65%_10%,82%_5%,88%_22%,100%_35%,92%_50%,100%_65%,88%_78%,82%_95%,65%_90%,50%_100%,35%_90%,18%_95%,12%_78%,0%_65%,8%_50%,0%_35%,12%_22%,18%_5%,35%_10%)] sm:size-24 sm:text-[9px]"
              >
                <Star className="mb-0.5 size-2.5 fill-white text-white" />
                <span>PROJETO</span>
                <span>DESTAQUE</span>
                <Star className="mt-0.5 size-2.5 fill-white text-white" />
              </div>

              {/* White Dashboard Mockup */}
              <div className="relative flex rounded-[4px] bg-white p-3 text-black shadow-xl sm:p-4">
                {/* Dashboard Left Sidebar */}
                <div className="w-[32%] border-r border-black/10 pr-2.5 sm:w-[30%]">
                  <div className="mb-4 text-electric">
                    <Home className="size-3.5 stroke-[2.5]" />
                  </div>
                  <nav className="flex flex-col gap-1.5 text-[9px] font-bold sm:text-[10px]">
                    {sidebarItems.map(({ icon: Icon, label, active }) => (
                      <div
                        key={label}
                        className={`flex items-center gap-1.5 rounded-[2px] px-2 py-1 transition-colors ${
                          active ? "bg-electric text-white" : "text-graphite hover:bg-black/5"
                        }`}
                      >
                        <Icon className="size-3 shrink-0" />
                        <span className="truncate">{label}</span>
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Dashboard Main Area */}
                <div className="min-w-0 flex-1 pl-3 sm:pl-4">
                  <div className="flex items-center justify-between text-[10px] text-graphite">
                    <span>Receita Total</span>
                    <ChevronDown className="size-3 text-graphite" />
                  </div>
                  <div className="mt-0.5 flex items-baseline gap-2">
                    <span className="text-base font-black text-black sm:text-xl">$24.4k</span>
                    <span className="text-[10px] font-bold text-[#65a30d]">↑ 12.5%</span>
                  </div>

                  {/* SVG Line Chart */}
                  <div className="my-2 h-16 w-full sm:h-20">
                    <svg viewBox="0 0 220 70" className="h-full w-full overflow-visible">
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="220" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="40" x2="220" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="60" x2="220" y2="60" stroke="#f1f5f9" strokeWidth="1" />

                      {/* Smooth Wavy Line */}
                      <path
                        d="M 20 56 Q 35 46, 50 46 T 80 52 T 110 35 T 140 40 T 170 25 T 200 15"
                        fill="none"
                        stroke="var(--electric)"
                        strokeWidth="2.5"
                      />

                      {/* Data Point Dots */}
                      {chartPoints.map((pt) => (
                        <circle
                          key={pt.day}
                          cx={pt.x}
                          cy={pt.y}
                          r="3"
                          fill="var(--electric)"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                        />
                      ))}
                    </svg>
                  </div>

                  {/* Days of Week */}
                  <div className="flex justify-between text-[8px] font-bold text-graphite sm:text-[9px]">
                    {chartPoints.map((pt) => (
                      <span key={pt.day}>{pt.day}</span>
                    ))}
                  </div>

                  {/* Top Sources */}
                  <div className="mt-3 border-t border-black/10 pt-2">
                    <div className="mb-1 text-[9px] font-bold uppercase text-graphite">
                      Principais Fontes
                    </div>
                    <div className="space-y-1 text-[9px] sm:text-[10px]">
                      {sources.map((s) => (
                        <div key={s.label} className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-black">
                            <span className="size-1.5 rounded-full bg-electric" />
                            {s.label}
                          </span>
                          <span className="font-bold text-black">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
