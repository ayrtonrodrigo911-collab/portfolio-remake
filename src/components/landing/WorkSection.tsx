import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { portfolioProjects } from "@/data/portfolioProjects";

const featuredProjects = portfolioProjects.slice(0, 4);
const whatsappLink = "https://wa.me/5581981075376";

export function WorkSection() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <Dialog open={isPortfolioOpen} onOpenChange={setIsPortfolioOpen}>
      <section id="work" className="bg-black py-10 text-white sm:py-14">
        <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 reveal-on-scroll">
            <div>
              <div className="mb-2 flex items-center gap-2.5">
                <span aria-hidden="true" className="inline-block h-4 w-2 bg-lime" />
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-lime">
                  Projetos selecionados
                </p>
              </div>
              <h2 className="headline text-2xl font-black uppercase sm:text-3xl">
                TRABALHOS EM DESTAQUE
              </h2>
            </div>

            <DialogTrigger asChild>
              <button
                type="button"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-lime sm:text-sm"
              >
                VER TODOS OS PROJETOS
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 stroke-[2.5] transition-transform group-hover:translate-x-1"
                />
              </button>
            </DialogTrigger>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setIsPortfolioOpen(true)}
                aria-label={`Abrir o portfólio. Projeto: ${project.title}`}
                className="group reveal-on-scroll overflow-hidden border border-white/15 bg-white text-left text-black transition-transform duration-300 hover:-translate-y-1 hover:border-lime focus-visible:outline-2 focus-visible:outline-lime"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="relative block aspect-[16/9] overflow-hidden bg-soft">
                  <img
                    src={project.image}
                    alt={`Imagem do projeto ${project.title}`}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 bg-lime px-2 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                    {project.category}
                  </span>
                </span>
                <span className="flex items-center justify-between gap-3 px-3.5 py-3 sm:px-4">
                  <span>
                    <span className="block text-sm font-black uppercase leading-tight sm:text-base">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold text-black/60 sm:text-xs">
                      Ver projeto no portfólio
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <DialogContent
        data-lenis-prevent
        className="max-h-[90dvh] max-w-6xl overflow-hidden border-2 border-black bg-paper p-0 text-ink shadow-2xl sm:rounded-none [&>button]:right-4 [&>button]:top-4 [&>button]:rounded-full [&>button]:bg-white [&>button]:p-2 [&>button]:text-black [&>button]:opacity-100 [&>button]:hover:bg-lime"
      >
        <div className="bg-black px-5 py-6 pr-16 text-white sm:px-8 sm:py-7">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="headline text-3xl font-black uppercase sm:text-4xl">
              Portfólio de projetos
            </DialogTitle>
            <DialogDescription className="max-w-2xl text-xs leading-relaxed text-white/70 sm:text-sm">
              Sites, lojas virtuais e experiências digitais criadas para diferentes negócios.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div
          data-lenis-prevent
          className="max-h-[calc(90dvh-118px)] overflow-y-auto overscroll-contain p-4 sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden border border-black/15 bg-white transition duration-300 hover:-translate-y-1 hover:border-black"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-soft">
                  <img
                    src={project.image}
                    alt={`Imagem do projeto ${project.title}`}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 bg-lime px-2 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-black uppercase sm:text-base">{project.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-black/65">
                    {project.description}
                  </p>
                  <a
                    href={`${whatsappLink}?text=${encodeURIComponent(`Olá! Gostaria de conversar sobre um site como o projeto ${project.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ink mt-5 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-[10px] font-black uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-electric"
                  >
                    Conversar sobre um projeto
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime inline-flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-black"
            >
              <Sparkles aria-hidden="true" className="size-4" />
              Quero criar meu site
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
