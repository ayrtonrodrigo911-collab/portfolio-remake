export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "santander-fintech",
    title: "Santander Cartões & Benefícios",
    category: "Fintech",
    description:
      "Interface responsiva para uma experiência digital de cartões e benefícios, com navegação clara em dispositivos móveis.",
    image: "/portfolio/cartaosant.png",
  },
  {
    id: "advocacia-elite",
    title: "Advocacia Tributária e Cível",
    category: "Site institucional",
    description:
      "Projeto institucional com apresentação de serviços jurídicos e caminhos diretos para contato pelo WhatsApp.",
    image: "/portfolio/heroadv.png",
  },
  {
    id: "rustic-burger",
    title: "Rustic Burger",
    category: "Gastronomia",
    description:
      "Página digital para delivery e steakhouse, pensada para apresentar o negócio com clareza no celular.",
    image: "/portfolio/rusticburguer.png",
  },
  {
    id: "lumiere",
    title: "Lumiere",
    category: "E-commerce",
    description:
      "Loja virtual com direção visual imersiva e apresentação de produtos em uma experiência responsiva.",
    image: "/portfolio/lumiere.png",
  },
  {
    id: "luxore",
    title: "Luxore",
    category: "E-commerce",
    description:
      "Projeto de loja virtual com apresentação elegante de produtos para diferentes tamanhos de tela.",
    image: "/portfolio/luxore.png",
  },
  {
    id: "notyfy",
    title: "Notyfy",
    category: "Serviços",
    description: "Interface web objetiva e responsiva para apresentação de um serviço digital.",
    image: "/portfolio/notyf.png",
  },
  {
    id: "sakura-sushi",
    title: "Sakura Sushi",
    category: "Gastronomia",
    description:
      "Landing page para restaurante japonês com apresentação do negócio, cardápio digital e pedidos online.",
    image: "/portfolio/Sakura-sushi.png",
  },
];
