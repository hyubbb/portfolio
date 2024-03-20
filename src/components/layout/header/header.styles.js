import styled from "styled-components";

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
