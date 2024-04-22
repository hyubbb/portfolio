import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { Main } from "./layout.styles";
import Cursor from "../../utils/Cursor";

const Layout = () => {
  return (
    <>
      <Main>
        <Header />
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
