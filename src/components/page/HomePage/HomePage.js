import React from "react";

import profile from "../../../assets/profile.jpg";
import {
  AboutMe,
  Container,
  ImgIcon,
  LeftSectionAbout,
  LeftSectionProfile,
  Main,
  RightSectionAbout,
  RightSectionProfile,
  Skill,
  Title,
} from "./homepage.styles";
import About from "../About/About";
import About2 from "../About/About2";

const HomePage = () => {
  return (
    <>
      <Main className='mainArticle'>
        {/* <Title>Main Page</Title> */}
        {/* <Header /> */}
        <About />
      </Main>

      {/* <About2 /> */}
    </>
  );
};

export default HomePage;
