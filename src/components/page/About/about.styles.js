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

export const ScrollIcon = styled.div`
  position: absolute;
  bottom: 20px;

  .circle-1,
  .circle-2 {
    animation: scroll 2s infinite linear;
    opacity: 0;
  }

  .circle-2 {
    animation-delay: 1s;
  }

  @keyframes scroll {
    0% {
      cy: 4;
      opacity: 0;
    }
    45%,
    55% {
      opacity: 1;
      cy: 9;
    }
    100% {
      cy: 14;
      opacity: 0;
    }
  }
`;
