import styled, { keyframes, css } from "styled-components";

export const centerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const openAd = keyframes`
  from {
    height:0px
  }
  to {
    height:100px;
  }
`;
export const ProjectBox = styled.div`
  height: 300px;
  position: relative;
  display: block;
  overflow: hidden;
  border: 1px solid black;
  background-color: #777777;
  color: black;
`;

export const InlineAd = styled.div`
  /* margin: 20px; */
  ${centerCss}
  width: 80%;
  border: 1px solid black;
  height: 100px;
  background-color: #fff;
  &.slide {
    height: 0px;
    overflow: hidden;
    animation: ${openAd} 2s;
    animation-iteration-count: infinite;
  }
`;

const moveDown = keyframes`
  from {
    top: 100px;
    opacity: 0;
  }
  to {
    top: 200px;
    opacity: 1;
  }
`;

export const OverlayAd = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 100px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border: 1px solid black;

  animation: ${moveDown} 4s;
  animation-iteration-count: infinite;

  .ad_main {
    ${centerCss}
    width: 100%;
    height: 70px;
    border-bottom: 1px solid black;
    .video {
      ${centerCss}
      flex: 6;
      border-right: 1px solid black;
      height: 100%;
    }

    .text {
      flex: 4;
    }
  }

  .ad_sub {
    ${centerCss}
    width: 100%;
    height: 30px;
  }
`;
