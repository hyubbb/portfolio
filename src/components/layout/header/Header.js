import React, { useEffect } from "react";
import { Container, HeaderNav, Main } from "./header.styles";
import { Link } from "react-router-dom";

const Header = () => {
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
    <Main>
      <Container>
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
      </Container>
    </Main>
  );
};

export default Header;
