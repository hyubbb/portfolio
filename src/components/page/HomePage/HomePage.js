import React, { useEffect, useRef, useState } from "react";

import { Main } from "./homepage.styles";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import AboutMe from "../About/AboutMe";

const HomePage = () => {
  const mainRef = useRef();

  useEffect(() => {
    let throttleTimeout = null; // 쓰로틀링을 위한 타임아웃 변수

    const wheelHandler = (e) => {
      e.preventDefault();
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          const { deltaY } = e;
          const { scrollTop } = mainRef.current;
          const pageHeight = window.innerHeight;

          // 실제 스크롤 이벤트 처리 로직
          if (deltaY > 0) {
            const nextPage = Math.min(
              Math.floor(scrollTop / pageHeight) + 1,
              2
            );
            mainRef.current.scrollTo({
              top: pageHeight * nextPage,
              left: 0,
              behavior: "smooth",
            });
          } else {
            const prevPage = Math.max(
              Math.floor(scrollTop / pageHeight) - 1,
              0
            );
            mainRef.current.scrollTo({
              top: pageHeight * prevPage,
              left: 0,
              behavior: "smooth",
            });
          }
        }, 500);
      }
    };

    document.body.style.overflowY = "hidden";
    const mainRefCurrent = mainRef.current;
    mainRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      document.body.style.overflowY = "auto";
      clearTimeout(throttleTimeout); // 컴포넌트 언마운트 시 타임아웃 제거
      mainRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <>
      <Main ref={mainRef} className='mainArticle' id='page-wrapper'>
        <AboutMe className='page' />
        <Skills className='page' />
        <Contact className='page' />
      </Main>
    </>
  );
};

export default HomePage;
