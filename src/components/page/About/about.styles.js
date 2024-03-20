import styled, { css } from "styled-components";
import { HoverCss } from "../../../Global.styles";

const Section = css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RightSectionProfile = styled.section`
  min-width: 600px;
  border-radius: 40px;
  padding: 0 100px;

  @keyframes slideUp {
    from {
      transform: translateY(20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 40px;
  }
`;

export const ImgIcon = styled.img`
  width: 200px;

  object-fit: cover;
  border-radius: 50%;
  aspect-ratio: 3/4;
`;

export const AboutMe = styled.article`
  position: relative;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 2rem;
  font-weight: 300;
`;

export const Comments = styled.div`
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 300;
`;

export const Skill = styled.span`
  background-color: #fff;
  color: red;
  font-weight: bold;
  font-size: 1.3rem;
`;
