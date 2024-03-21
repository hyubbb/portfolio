import styled from "styled-components";
import { centerCss } from "../ad-form/projects.styles";

export const Highlight = styled.div`
  display: inline-block;
  background-color: var(--bg-gray);
  color: white;
  margin: 15px 0;
  padding: 5px 10px;
  border-radius: 7px;
  font-size: 1.3rem;
  font-weight: normal;
`;

export const SectionTitle = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0px 0 20px 0;

  .sub {
    font-size: 1.3rem;
    color: var(--sub-color);
    font-weight: lighter;
  }
`;

export const SectionText = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Sub__MainText = styled.div`
  &::before {
    content: "● ";
    font-weight: bold;
  }
`;

export const Sub__SubText = styled.div`
  font-style: italic;
  margin-left: 20px;
  &::before {
    content: "→ ";
    font-weight: bold;
  }
`;

export const SectionAd = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  .section {
    width: 100%;
    flex: 1 1 250px;
    /* text-align: center; */
  }
`;

export const Box = styled.div`
  margin: 30px 0 10px;
  padding: 10px;
  border-radius: 10px;

  span {
    font-size: 1.2rem;
    display: inline-block;
    padding: 10px;
    margin: 0 0 20px 0;
    color: #fff;
    background-color: var(--bg-gray);
    border-radius: 10px;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
  }
`;
