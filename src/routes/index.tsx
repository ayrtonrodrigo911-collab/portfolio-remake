import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { WorkSection } from "@/components/landing/WorkSection";
import { AboutMe } from "@/components/landing/AboutMe";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ToolsStack } from "@/components/landing/ToolsStack";
import { Experience } from "@/components/landing/Experience";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PP STUDIO — Desenvolvedor Web Freelancer" },
      {
        name: "description",
        content:
          "Ayrton é desenvolvedor web freelancer de Pernambuco. Cria sites em até 7 dias, pensados para celular e com foco em conversão.",
      },
      { property: "og:title", content: "PP STUDIO — Desenvolvedor Web Freelancer" },
      {
        property: "og:description",
        content: "Portfólio de Ayrton com projetos, processo de trabalho e experiência. Fale pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useLenisScroll();
  useScrollReveal();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <div className="min-h-screen bg-paper text-ink">
        <Header />
        <main>
          <Hero />
          <WorkSection />
          <AboutMe />
          <HowItWorks />
          <ToolsStack />
          <Experience />
          <Testimonials />
        </main>
        <Footer />
        <FloatingWhatsApp phoneNumber="5581981075376" />
      </div>
    </>
  );
}
