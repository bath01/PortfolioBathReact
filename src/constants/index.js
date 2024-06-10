import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Developpeur Web & Mobile",
    icon: web,
  },
  {
    title: "Developpeur Front-end",
    icon: mobile,
  },
  {
    title: "Developpeur Jeux",
    icon: backend,
  },
  {
    title: "Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker(Debutant)",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur(Unity, Python, JavaScript)",
    company_name: "ORANGE CI / Orange Digital center => Orange Digital Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaboration avec des équipes pluridisciplinaires, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre du design responsive et garantie de la compatibilité entre navigateurs.",
      "Participation à des revues de code et fourniture de retours constructifs à d'autres développeurs.",
    ],
  },
  {
    title: "Développeur React Native",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Développement et maintenance d'applications mobiles en utilisant React Native et d'autres technologies connexes.",
      "Collaboration avec des équipes pluridisciplinaires, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre du design responsive et garantie de la compatibilité entre appareils mobiles.",
      "Participation à des revues de code et fourniture de retours constructifs à d'autres développeurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaboration avec des équipes pluridisciplinaires, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre du design responsive et garantie de la compatibilité entre navigateurs.",
      "Participation à des revues de code et fourniture de retours constructifs à d'autres développeurs.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaboration avec des équipes pluridisciplinaires, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre du design responsive et garantie de la compatibilité entre navigateurs.",
      "Participation à des revues de code et fourniture de retours constructifs à d'autres développeurs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "INFOGRAPHIE",
    description:
      "Des creations faites par moi même et offrant mes services aussi pour des particuliers",
    tags: [
      {
        name: "Photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "Canvas",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "ADIA",
    description:
      "Un personnage annimé capable d'interagir avec l'humain dans le cadre de l'aider dans certaines tâches",
    tags: [
      {
        name: "Csharp(c#)",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "PICARGO & PISCHOOL",
    description:
      "Une application pour suivre des marchandises c'est le cas de picargo et des elèves de leur maison jusqu'a l'ecole j'ai été au front-end de cette application",
    tags: [
      {
        name: "Angular Js & Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs & restapi",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
