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
    siteUrl: "https://portfoliohyub.netlify.app/",
    gitUrl: "https://github.com/hyubbb/portfolio",
  },
  {
    title: "Note web",
    description: "react-note-app",
    lang: ["react", "recoil", "styled-components", "typescript", "expressjs"],
    type: "mini",
    img: { noteApp },
    color: "#55c9ff",
    siteUrl: "https://port-0-note-app-754g42alujclxiq.sel5.cloudtype.app/",
    gitUrl: "https://github.com/hyubbb/react-note-recoil-app",
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
    siteUrl: "https://web-react-board-app-754g42alujclxiq.sel5.cloudtype.app/",
    gitUrl: "https://github.com/hyubbb/react-board-app",
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
