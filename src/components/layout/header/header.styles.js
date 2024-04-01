import { IoBagCheck } from "react-icons/io5";
import styled from "styled-components";
import { font, ulDefaultSet } from "../../../Global.styles";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  display: flex;
  position: fixed;
  width: 100%;
  top: 50px;
  justify-content: center;
  z-index: 10;

  .w-mob {
    display: none;
    margin: 20px;
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    /* display: none; */
    justify-content: left;
    top: 0;
    position: absolute;

    .w-web {
      display: none;
    }
    .w-mob {
      display: block;
    }
  }
`;

export const HeaderNav = styled.header`
  padding: 20px 30px;
  z-index: 11;
  backdrop-filter: blur(2px);
  border-radius: 30px;
  background-color: #ececec70;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.17) 4px 5px 10px 3px;
  ul {
    ${ulDefaultSet()}
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    height: 30px;
    font-size: ${font.default};
    color: inherit;

    a {
      text-decoration: none;
      color: inherit;
      li {
        cursor: pointer;
        font-weight: 500;
        padding: 10px;
        border-radius: 10px;
        letter-spacing: 1px;
        transition: all 0.2s ease-in-out;

        &.active-menu,
        &:hover {
          border-radius: 10px;
          background-color: var(--bg-gray);
          color: white;
          font-weight: bold;
        }
      }
    }
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  background-color: var(--bg-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  transition: all 1s;
  animation: opacity 0.2s ease;

  ul {
    ${ulDefaultSet()}
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: ${font.large};
    li {
      padding: 30px;
      color: #fff;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
