import styled, { css } from "styled-components";
import { HoverCss } from "../../../Global.styles";

const Section = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;

  animation: slideDown 1s ease-out forwards;
  @keyframes slideDown {
    0% {
      transform: translateY(-5%);
      opacity: 0;
    }
    50% {
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  .main {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const LeftSectionProfile = styled.section`
  ${Section};
  flex: 3;
  min-width: 300px;
  text-align: center;
  align-items: center;
  border-radius: 40px;
  padding: 1rem;
  /* animation: slideDown 1s ease-out forwards; */

  /* @keyframes slideDown {
    0% {
      transform: translateY(-15%);
      opacity: 0;
    }
    50% {
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  } */

  h2 {
    font-size: 2rem;
  }

  span {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .icons {
    img {
      width: 150px;
    }
  }
`;

export const RightSectionProfile = styled.section`
  ${Section};
  flex: 7;
  min-width: 600px;
  border-radius: 40px;
  gap: 30px;
  padding: 0 100px;
  margin-top: 70px;

  /* animation: slideUp 1s ease-out forwards; */

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
    padding: 0 20px;
  }
  /* border: 1px solid red; */
  /* overflow-y: scroll; */
`;

export const ImgIcon = styled.img`
  width: 200px;

  object-fit: cover;
  border-radius: 50%;
  aspect-ratio: 3/4;
  /* border: 1px solid black; */
`;

export const AboutMe = styled.article`
  position: relative;
  display: flex;
`;

export const LeftSectionAbout = styled.section`
  ${Section};
  border: 1px solid blue;
  flex: 5;
`;

export const RightSectionAbout = styled.section`
  ${Section};
  flex: 5;
  border: 1px solid red;
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

export const SubComments = styled.div`
  margin-top: 20px;
  font-size: 1.3rem;
  line-height: 2rem;
  strong {
    color: #000;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Skill = styled.span`
  background-color: #fff;
  color: red;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const ButtonMenus = styled.ul`
  display: flex;
  padding: 0;
  gap: 20px;
  align-items: center;
  list-style: none;
  font-size: 2rem;
  color: #000;
  margin-top: 50px;

  li {
    padding: 20px 50px;
    /* border: 1px solid black; */
    border-radius: 30px;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px 1px;

    &:hover {
      ${HoverCss};
    }
  }
`;

export const TypingAnimation = styled.div`
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

export const Contact = styled.div`
  .title {
    text-align: center;
  }
  .box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    margin-bottom: 50px;

    .text {
      display: flex;
      flex-direction: column;
      flex: 1 0;
      gap: 20px;
      padding: 20px;
      text-align: center;
      font-size: 1rem;
      font-weight: 300;

      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px 1px;

      &:hover {
        transform: scale(1.02);
        transition: all 0.5s;
      }

      .title {
        display: flex;
        justify-content: center;
        padding: 20px;
        gap: 10px;
        font-weight: 800;
        text-align: center;
        font-size: 1.3rem;
        border-bottom: 1px solid #000;
        svg {
          width: 20px;
        }
      }
    }
  }
`;
