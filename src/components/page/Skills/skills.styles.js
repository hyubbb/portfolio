import styled, { css } from "styled-components";
import { MainStyle } from "../HomePage/homepage.styles";
import { centerCss } from "../Careers/ad-form/projects.styles";

export const Main = styled.main`
  ${MainStyle};
  flex-direction: unset;
`;

export const Section = styled.section`
  width: 100%;

  .title {
    text-align: center;
  }

  .box {
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
  }

  h1 {
    font-size: 2rem;
    /* text-align: center; */
  }

  h5 {
    margin: 10px;
  }

  .cols {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 2.3rem;
    .col {
      flex: 1 0;
      h5 {
        margin-bottom: 30px;
        text-align: center;
      }
      .subText {
        font-weight: 300;
        font-size: 1.2rem;
      }
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  justify-content: center;
  /* border: 1px solid black; */
  border-radius: 10px;
`;
