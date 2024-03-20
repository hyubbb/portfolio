import styled from "styled-components";

export const Section = styled.section`
  flex-direction: column;
  .title {
    text-align: center;
    font-size: 1.5rem;
  }
  .box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
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
