import styled from "styled-components";
import { MainStyle } from "../../../components/page/HomePage/homepage.styles";

export const Container = styled.div`
  display: flex;
  /* background-color: var(--bg-gray); */
`;

export const Main = styled.main`
  ${MainStyle};
  display: flex;
  justify-content: center;
  top: 50px;
  /* padding: 20px; */
  position: fixed;
  z-index: 10;
  /* height: 100%; */
  /* &:before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(6px);
    z-index: 1;
    width: 100%;
  } */
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 20px;
    height: 30px;
    font-size: 1rem;
    color: inherit;

    a {
      text-decoration: none;
      /* color: #fff; */
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
