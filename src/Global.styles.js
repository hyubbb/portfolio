import styled, { css, createGlobalStyle } from "styled-components";

export const display = {
  mobile: "335px",
  tablet: "758px",
  desktop: "1024px",
};

export const font = {
  large: "1.7rem",
  medium: "1.2rem",
  default: "1rem",
  small: "0.8rem",
};

export const ulDefaultSet = () => `
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const GlobalStyle = createGlobalStyle`

:root {
  color: #444444;
  --main-color: #4294ff;
  --sub-color: #777777;
  --bg-gray:#353535;
  --offWhite:#ece7e1;
}

html, body{
  height:100%;
  font-family:'Helvetica', sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
      display: none;
    }

}

div{
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: black;
}
strong{
  color:#000;
 
}

mark{
  display: inline-block;
  line-height:0rem;
  padding-bottom: 1rem;
}
`;
