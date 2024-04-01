import React, { useEffect, useState } from "react";
import { Container, HeaderNav, Main, MobileMenu } from "./header.styles";
import { Link } from "react-router-dom";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const headerMenu = ["HOME", "CAREERS", "PROJECTS"];

  const handleScroll = () => {
    const elm = document.querySelector(".header");
    if (window.scrollY > 100) {
      elm.style.backgroundColor = "#28282847";
      elm.style.color = "#fff";
    } else {
      elm.style.backgroundColor = "#ececec70";
      elm.style.color = "#000";
    }
  };
  const toggleActive = (menu) => {
    const elm = document.querySelector(`.${menu}`);
    const active = document.querySelector(`.active-menu`);
    if (active) {
      active.classList.remove("active-menu");
    }
    elm.classList.add("active-menu");
    setMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const pathName = window.location.pathname.split("/")[1];
    const tempName = pathName === "" ? "home" : pathName;
    const active = document.querySelector(`.${tempName}`);
    if (active) {
      active.classList.add("active-menu");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className='w-mob' onClick={() => setMenu(!menu)}>
          <IoMenu />
        </div>
        {menu && (
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
              <li onClick={() => setMenu(!menu)}>
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
