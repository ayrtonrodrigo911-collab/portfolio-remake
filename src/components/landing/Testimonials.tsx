import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import building from "@/assets/building.jpg";
import { testimonials } from "@/data/testimonials";

const slideColors = [
  "bg-electric text-white",
  "bg-white text-black",
  "bg-lime text-black",
  "bg-black text-white",
];

export function Testimonials() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!motionQuery) {
      setPrefersReducedMotion(false);
      return;
    }

    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches);
    updateMotionPreference();
    motionQuery.addEventListener?.("change", updateMotionPreference);

    return () => motionQuery.removeEventListener?.("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    const updateActiveIndex = () => setActiveIndex(carouselApi.selectedScrollSnap());
    updateActiveIndex();
    carouselApi.on("select", updateActiveIndex);
    carouselApi.on("reInit", updateActiveIndex);

    return () => {
      carouselApi.off("select", updateActiveIndex);
      carouselApi.off("reInit", updateActiveIndex);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || prefersReducedMotion || isHovered || isFocused || isAutoplayPaused) {
      return;
    }

    const interval = window.setInterval(() => carouselApi.scrollNext(), 4800);
    return () => window.clearInterval(interval);
  }, [carouselApi, isAutoplayPaused, isFocused, isHovered, prefersReducedMotion]);

  return (
    <section id="testimonials" className="bg-paper py-10 sm:py-14">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 reveal-on-scroll">
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-electric">
              Palavras de quem já trabalhou comigo
            </p>
            <h2 className="headline text-2xl font-black uppercase text-black sm:text-3xl">
              O QUE DIZEM OS CLIENTES
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-black/55">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span aria-hidden="true">/</span>
            <span>{String(testimonials.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_300px]">
          <div
            className="reveal-on-scroll min-w-0"
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsFocused(false);
              }
            }}
          >
            <Carousel
              setApi={setCarouselApi}
              opts={{ align: "start", loop: true, slidesToScroll: 1 }}
              aria-label="Depoimentos de clientes"
              aria-live="off"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={`${testimonial.name}-${index}`}
                    role="group"
                    aria-label={`${index + 1} de ${testimonials.length}`}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <figure
                      className={`flex min-h-[280px] h-full flex-col justify-between p-5 sm:min-h-[300px] sm:p-6 ${slideColors[index % slideColors.length]}`}
                    >
                      <div className="flex items-center justify-between">
                        <Quote aria-hidden="true" className="size-7 fill-current opacity-35" />
                        <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] opacity-70">
                          <span aria-hidden="true" className="size-2 bg-lime" />
                          Depoimento
                        </span>
                      </div>

                      <blockquote className="my-5 text-xs font-semibold leading-relaxed sm:text-sm">
                        “{testimonial.quote}”
                      </blockquote>

                      <figcaption className="flex items-center justify-between gap-3 border-t border-current/20 pt-4">
                        <div>
                          <span className="block text-xs font-black uppercase sm:text-sm">
                            {testimonial.name}
                          </span>
                          <span className="mt-1 block text-[10px] font-medium opacity-70 sm:text-xs">
                            {testimonial.role}
                          </span>
                        </div>
                        <span
                          className="headline text-2xl font-black opacity-30"
                          aria-hidden="true"
                        >
                          0{index + 1}
                        </span>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div role="group" aria-label="Escolher depoimento" className="flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={`${testimonial.name}-dot`}
                    type="button"
                    onClick={() => carouselApi?.scrollTo(index, prefersReducedMotion)}
                    aria-label={`Ir para o depoimento ${index + 1}, de ${testimonial.name}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`h-1.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-electric ${
                      index === activeIndex
                        ? "w-8 bg-electric"
                        : "w-3 bg-black/20 hover:bg-black/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                {!prefersReducedMotion && (
                  <button
                    type="button"
                    onClick={() => {
                      const resume = isAutoplayPaused;
                      setIsAutoplayPaused(!isAutoplayPaused);
                      if (resume) {
                        setIsHovered(false);
                        setIsFocused(false);
                      }
                    }}
                    aria-label={
                      isAutoplayPaused
                        ? "Retomar carrossel automático"
                        : "Pausar carrossel automático"
                    }
                    aria-pressed={isAutoplayPaused}
                    className="flex size-10 items-center justify-center border border-black/20 bg-white text-black transition-colors hover:bg-lime focus-visible:outline-2 focus-visible:outline-electric"
                  >
                    {isAutoplayPaused ? (
                      <Play aria-hidden="true" className="size-4 fill-current" />
                    ) : (
                      <Pause aria-hidden="true" className="size-4" />
                    )}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => carouselApi?.scrollPrev(prefersReducedMotion)}
                  aria-label="Ver depoimento anterior"
                  className="flex size-10 items-center justify-center border border-black/20 bg-white text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-electric"
                >
                  <ChevronLeft aria-hidden="true" className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => carouselApi?.scrollNext(prefersReducedMotion)}
                  aria-label="Ver próximo depoimento"
                  className="flex size-10 items-center justify-center border border-black/20 bg-white text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-electric"
                >
                  <ChevronRight aria-hidden="true" className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[330px] overflow-hidden lg:block reveal-on-scroll">
            <div
              aria-hidden="true"
              className="absolute right-4 top-4 z-10 grid grid-cols-2 gap-1.5"
            >
              {Array.from({ length: 8 }, (_, dotIndex) => (
                <span key={dotIndex} className="size-1.5 bg-lime" />
              ))}
            </div>
            <img
              src={building}
              alt="Fachada arquitetônica em preto e branco"
              loading="lazy"
              className="size-full object-cover grayscale transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime">
                PP Studio
              </p>
              <p className="mt-1 text-sm font-bold">Experiências digitais feitas para crescer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
