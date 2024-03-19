import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  max-height: 900px;
  /* display: flex;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px dotted black; */

  /* width: 1000px; */
`;

export const Main = styled.main`
  /* position: relative;
  width: 100%;
  display: flex;
  justify-items: center; */
`;

const leftSection = css`
  position: relative;
  width: 100%;
  flex: 7;
  padding: 1rem;
`;

const rightSection = css`
  position: relative;
  width: 100%;
  flex: 3;
  padding: 1rem;
`;

export const LeftSectionProfile = styled.section`
  ${leftSection};
  text-align: center;
  border: 1px solid blue;
  border-radius: 40px;
`;

export const RightSectionProfile = styled.section`
  ${rightSection};
  border-radius: 40px;
  display: flex;
  flex-direction: column;

  border: 1px solid red;
  /* overflow-y: scroll; */
  justify-content: center;
  align-items: center;
`;

export const ImgIcon = styled.img`
  width: 300px;
  object-fit: cover;
  /* border-radius: 50%; */
  aspect-ratio: 3/4;
  /* border: 1px solid black; */
`;

export const AboutMe = styled.article`
  position: relative;
  display: flex;
`;

export const LeftSectionAbout = styled.section`
  ${leftSection};
  border: 1px solid blue;
  flex: 5;
`;

export const RightSectionAbout = styled.section`
  ${rightSection};
  flex: 5;
  border: 1px solid red;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Skill = styled.span`
  background-color: #fff;
  color: red;
  font-weight: bold;
`;

export const TypingAnimation = styled.div`
  font-size: 6rem;
  span {
    /* color: #bd53ed; */
    position: relative;
    &:before {
      content: "";
      height: 120px;
      width: 2px;
      position: absolute;
      top: 50%;
      right: -8px;
      transform: translateY(-45%);
      animation: blink 0.7s infinite;
    }
  }
  .stop-blinking {
    &:before {
      animation: none;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
