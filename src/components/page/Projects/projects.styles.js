import styled, { css } from "styled-components";
import { font } from "../../../Global.styles";

export const Main = styled.main`
  margin-top: 180px;
  animation: slideDown 0.8s ease forwards;
  h1 {
    margin-bottom: 40px;
    text-align: center;
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
  @media screen and (max-width: 480px) {
    margin-top: 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  overflow: hidden;

  article {
    flex: 8;
    height: 100%;
    min-height: 680px;
  }
`;

export const Aside = styled.aside`
  border: 1px solid #000;
  background-color: #19193b;
  color: #fff;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px 30px;
  font-size: ${font.medium};
  border-radius: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const List = styled.span`
  display: block;
  cursor: pointer;
  &::before {
    content: "●";
    margin-right: 10px;
    color: ${(props) => props.color || "black"};
  }
`;

export const ProjectLists = styled.article`
  .mainBox {
    width: 100%;
    display: grid;
    gap: 30px;
    row-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  h3 {
    margin-top: 5px;
  }
`;

export const ProjectBox = styled.div`
  position: relative;
  max-width: none;
  height: 300px;
  display: grid;

  color: white;
  overflow: hidden;
  background-color: ${(props) => props.color || "white"};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }

  .title {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: ${(props) => props.color || "#3d3d3d"};
    margin-top: 5px;
    padding: 10px;
  }

  .hoverMenu {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff36;
    visibility: hidden;
    gap: 20px;
    a {
      background-color: #000;
      font-size: ${font.default};
      letter-spacing: 2px;
      padding: 20px;
      width: 100px;
      border: 1px solid black;
      border-radius: 20px;
      color: #fff;
    }
  }
  &:hover {
    transform: scale(1.02);
    transition: all 0.3s;
    box-shadow: 0.3rem 0.3rem 0rem rgb(0, 0, 0, 0.8);

    /* Apply blur to everything but the hoverMenu */
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      backdrop-filter: blur(1px);
      z-index: 1;
      width: 100%;
    }

    .hoverMenu {
      visibility: visible;
      z-index: 1; /* Ensure hoverMenu is above the pseudo-element */
    }
  }
`;

export const LangDiv = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

export const ColorBox = styled.div`
  padding: 5px;
  font-size: ${font.small};
  text-wrap: nowrap;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#3d3d3d"};
`;
