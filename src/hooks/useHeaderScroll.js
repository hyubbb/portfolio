import { useEffect, useState } from "react";

const useHeaderScroll = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleActive = (menu) => {
    const elm = document.querySelector(`.${menu}`);
    const active = document.querySelector(`.active-menu`);
    if (active) {
      active.classList.remove("active-menu");
    }
    elm.classList.add("active-menu");
    setIsOpen(false);
  };

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

  return { toggleActive, isOpen, setIsOpen };
};

export default useHeaderScroll;
