import styled, { css } from "styled-components";
import { HoverCss } from "../../../Global.styles";
// column
export const MainStyle = css`
  /* max-width: 1400px; */
  margin: 0 auto;
  /* justify-content: center; */
`;

export const Main = styled.main`
  ${MainStyle};
  margin-top: 20px;
  box-sizing: border-box;
  width: 100%;

  .title {
    display: block;
    width: 100%;
    position: relative;
    margin: 10px 0 30px 10px;
    /* position: relative; */
    /* box-sizing: border-box; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 700px; */
  /* display: flex;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px dotted black; */
  /* height: 80%; */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* height: 80%; */

  .detail {
    margin: 20px;
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
    height: 100%;
  }
`;

export const Companies = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  gap: 20px;
  margin-bottom: 30px;
  section {
    flex: 1 1 250px;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  .title {
    margin: 0;
    padding: 0px;
    /* font-size: 2rem; */
    /* display: block; */
    /* position: relative; */
    /* box-sizing: border-box; */
  }
`;

export const Company = styled.section`
  /* border: 1px solid black; */
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px 1px;
  /* border: 1px solid black; */
  border-radius: 20px;

  .left,
  .right {
    flex: 1 1 400px;
    /* height: 100%; */
    /* width: 100%; */
  }
`;
