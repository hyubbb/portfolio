import {
  boardApp,
  noteApp,
  pokemonApp,
  shopApp,
} from "../../../assets/imgs/logo";

const projects1 = [
  {
    title: "Note web",
    description: "react-note-app",
    lang: ["react", "recoil", "typescript", "styled-components", "expressjs"],
    type: "clone",
    img: { noteApp },
    color: "#55c9ff",
    gitUrl: "https://github.com/hyubbb/react-note-recoil-app",
  },
  {
    title: "board web",
    description: "react-board-app",
    lang: ["react", "redux-thunk", "tailwindcss", "expressjs", "firebase"],
    type: "",
    img: { boardApp },
    color: "#ffc253",
    siteUrl: "http://3.128.178.255:3000/",
    gitUrl: "https://github.com/hyubbb/react-board-app",
  },
  {
    title: "pokemon",
    description: "react-pokemon-app",
    lang: ["react", "typescript", "tailwindcss", "firebase"],
    type: "clone",
    img: { pokemonApp },
    color: "#d03ed0",
    siteUrl: "https://pokeapp-hyub.netlify.app/",
    gitUrl: "https://github.com/hyubbb/react-poke-app",
  },
];

const projects2 = [
  {
    title: "shop",
    description: "react-pokemon-app",
    lang: ["react", "redux-thunk", "scss", "firebase"],
    type: "clone",
    img: { shopApp },
    color: "#45d059",
  },
];

export { projects1, projects2 };
