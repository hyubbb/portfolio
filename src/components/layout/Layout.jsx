import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { Main } from "./layout.styles";

const Layout = () => {
  return (
    <>
      <Main>
        <Header />
        <div className='container'>
          <Outlet />
        </div>
      </Main>
    </>
  );
};

export default Layout;
