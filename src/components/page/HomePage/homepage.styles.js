import styled, { css } from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  /* display: flex; */
  /* gap: 60px; */
  /* flex-direction: column; */
  /* position: fixed; */
  /* left: 0; */
  /* top: 0; */
  overflow-y: auto;
  &#page-wrapper {
    .page {
      height: 100vh;
      width: 100%;
      position: relative;
      align-items: center;
      justify-content: center;
      display: flex;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

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
  animation: slideDown 1s ease-out forwards;
`;

const Section = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  gap: 60px;
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
