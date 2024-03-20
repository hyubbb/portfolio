import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  flex-direction: unset;
`;

export const Section = styled.section`
  flex-direction: column;
  .title {
    text-align: center;
    font-size: 1.5rem;
  }

  .box {
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 2.3rem;

    .col {
      flex: 1 0;
      h5 {
        margin-bottom: 30px;
        text-align: center;
      }
      .subText {
        font-weight: 300;
        font-size: 1.2rem;
      }
    }
  }

  h5 {
    margin: 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  justify-content: center;
  /* border: 1px solid black; */
  border-radius: 10px;
`;
