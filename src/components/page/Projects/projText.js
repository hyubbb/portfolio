import {
  boardApp,
  noteApp,
  pokemonApp,
  portfolio,
  shopApp,
} from "../../../assets/imgs/logo";

const projects1 = [
  {
    title: "portfolio",
    description: "portfolio",
    lang: ["react", "styled-components", "express", "webpack"],
    type: "mini",
    img: { portfolio },
    color: "#d03ed0",
    siteUrl: "http://3.128.178.255:3001/",
    gitUrl: "https://github.com/hyubbb/portfolio",
  },
  {
    title: "pokemon",
    description: "react-pokemon-app",
    lang: ["react", "typescript", "tailwindcss", "firebase", "express"],
    type: "mini",
    img: { pokemonApp },
    color: "#d03ed0",
    siteUrl: "https://pokeapp-hyub.netlify.app/",
    gitUrl: "https://github.com/hyubbb/react-poke-app",
  },
  {
    title: "board web",
    description: "react-board-app",
    lang: [
      "react",
      "redux-thunk",
      "tailwindcss",
      "express",
      "firebase",
      "ec2",
      "mysql",
    ],
    type: "mini",
    img: { boardApp },
    color: "#ffc253",
    siteUrl: "http://3.128.178.255:3000/",
    gitUrl: "https://github.com/hyubbb/react-board-app",
  },
  {
    title: "Note web",
    description: "react-note-app",
    lang: ["react", "recoil", "styled-components", "typescript", "expressjs"],
    type: "mini",
    img: { noteApp },
    color: "#55c9ff",
    siteUrl: "http://3.128.178.255:3100/",
    gitUrl: "https://github.com/hyubbb/react-note-recoil-app",
  },
];

const projects2 = [
  {
    title: "shop",
    description: "react-shop-app",
    lang: ["react", "redux-thunk", "scss", "firebase"],
    type: "clone",
    img: { shopApp },
    color: "#45d059",
    siteUrl: "https://shop-hyub.netlify.app/",
    gitUrl: "https://github.com/hyubbb/react-shop-app",
  },
];

export { projects1, projects2 };
