import styled, { css, createGlobalStyle } from "styled-components";

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
  overflow-y: hidden;

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

export const HoverCss = css`
  background-color: var(--main-color);
  border: 0px;
  color: white;
`;
