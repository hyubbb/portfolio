import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  /* --main-color: #717482;
  --second-color: #767a89; */
  color: #444444;
  --main-color: #4294ff;
  --sub-color: #777777;
  --bg-gray:#353535;
  --offWhite:#ece7e1;
}



html, body{
  height:100%;
  /* font-family: 'Helvetica Neue', sans-serif; */
  /* font-family: 'Noto Sans KR','Noto Sans JP', 'Poppins', sans-serif; */
  
  font-family:'Helvetica', sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
 /* background-color: var(--offWhite); */


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
