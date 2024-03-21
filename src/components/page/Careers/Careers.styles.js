import styled, { css } from "styled-components";
import { HoverCss } from "../../../Global.styles";

export const MainStyle = css`
  margin: 0 auto;
`;

export const Main = styled.main`
  ${MainStyle};
  margin-top: 160px;
  box-sizing: border-box;
  width: 100%;

  animation: slideDown 0.8s ease forwards;

  @keyframes slideDown {
    0% {
      transform: translateY(-5%);
      opacity: 0;
    }

    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
  padding-bottom: 40px;
  .detail {
    margin: 20px;
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
    height: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Companies = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 20px;
  min-width: 200px;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media screen and (max-width: 900px) {
    flex-direction: row;
    flex: 1;
    flex-wrap: nowrap;
  }

  section {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  .title {
    margin: 0;
    padding: 0px;
  }
`;

export const Company = styled.section`
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 20px 0px;

  .active-item {
    color: red;
  }

  .name,
  .period,
  .desc {
    padding: 10px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    .name {
      flex-basis: 200px;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .period {
      font-size: 1rem;
    }
  }

  .desc {
    font-size: 1.1rem;
    font-style: italic;
    color: #777777;
  }

  &.active-item,
  &:hover {
    ${HoverCss};

    .desc {
      color: white;
    }
  }
`;

export const CompanyCareer = styled.div`
  flex: 7;
  height: 100%;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px 1px;
  border-radius: 20px;

  .left,
  .right {
    flex: 1 1 400px;
  }
  ㄴ main {
    background-color: var(--bg-gray);
    padding: 30px;
    border-radius: 10px;
    box-sizing: border-box;
    color: white;
    margin-top: 30px;
  }
`;
