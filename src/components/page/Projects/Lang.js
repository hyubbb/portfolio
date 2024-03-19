import React from "react";
import { ColorBox, LangDiv } from "./projects.styles";

const Lang = ({ language }) => {
  const color = {
    react: "#c74c30",
    redux: "#fe8613",
    tailwindcss: "#777777",
    recoil: "#764abc",
    typescript: "#daad21",
    expressjs: "#000000",
    firebase: "#ffca28",
    typescript: "#007acc",
    scss: "#c69",
    "redux-thunk": "#764abc",
    "styled-components": "#d76e97",
  };

  return (
    <>
      <LangDiv>
        {language.map((lang, index) =>
          index < 4 ? (
            <ColorBox key={index} color={color[lang]}>
              {lang.replace(/\b[a-z]/, (letter) => letter.toUpperCase())}
            </ColorBox>
          ) : (
            "..."
          )
        )}
      </LangDiv>
    </>
  );
};

export default Lang;
