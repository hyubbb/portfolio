import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  flex-direction: column;
  padding: 0 40px 30px 40px;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;

  .container {
    margin-top: 120px;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    padding: 20px;
  }
`;
