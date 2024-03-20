import {
  boardApp,
  noteApp,
  pokemonApp,
  shopApp,
} from "../../../assets/imgs/logo";

const projects1 = [
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
    lang: ["react", "recoil", "typescript", "styled-components", "expressjs"],
    type: "mini",
    img: { noteApp },
    color: "#55c9ff",
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
  },
];

export { projects1, projects2 };