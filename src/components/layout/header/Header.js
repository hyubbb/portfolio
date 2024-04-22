import React, { useEffect, useState } from "react";
import { Container, HeaderNav, Main, MobileMenu } from "./header.styles";
import { Link } from "react-router-dom";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import useHeaderScroll from "../../../hooks/useHeaderScroll";
const Header = () => {
  const { isOpen, setIsOpen, toggleActive } = useHeaderScroll();
  // const headerMenu = ["HOME", "CAREERS", "PROJECTS"];
  const headerMenu = ["HOME", "PROJECTS"];
  return (
    <>
      <Main>
        <div className='w-web'>
          <HeaderNav className='header'>
            <ul>
              {headerMenu.map((menu, index) => {
                return (
                  <Link
                    to={menu === "home" ? "/" : `/${menu}`}
                    key={index}
                    onClick={() => toggleActive(menu)}
                  >
                    <li className={menu}>{menu}</li>
                  </Link>
                );
              })}
            </ul>
          </HeaderNav>
        </div>
        <div className='w-mob' onClick={() => setIsOpen(!isOpen)}>
          <IoMenu />
        </div>
        {isOpen && (
          <MobileMenu>
            <ul>
              {headerMenu.map((menu, index) => {
                return (
                  <Link
                    to={menu === "home" ? "/" : `/${menu}`}
                    key={index}
                    onClick={() => toggleActive(menu)}
                  >
                    <li className={menu}>{menu}</li>
                  </Link>
                );
              })}
              <li onClick={() => setIsOpen(!isOpen)}>
                <IoCloseCircleOutline />
              </li>
            </ul>
          </MobileMenu>
        )}
      </Main>
    </>
  );
};

export default Header;
