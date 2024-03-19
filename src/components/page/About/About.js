import React, { useState } from "react";
import {
  AboutMe,
  Comments,
  Container,
  ImgIcon,
  LeftSectionAbout,
  LeftSectionProfile,
  Main,
  RightSectionAbout,
  RightSectionProfile,
  Skill,
  Title,
  ButtonMenus,
  SubComments,
  Contact,
} from "./about.styles";
import profile from "../../../assets/profile.jpg";
import { text } from "../../../assets/text";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";
import { FaPhone, FaGithub, FaEnvelope } from "react-icons/fa6";
const About = () => {
  const [isModal, setIsModal] = useState(false);

  const handler = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <Container>
        <div className='main'>
          {/* <Main> */}
          {/* <LeftSectionProfile>
            <ImgIcon src={profile} alt='profile' />

            <h2>이 창 협</h2>
            <span>Front-End Engineer</span>
            <p />
            <div className='icons'>
              <a href='https://github.com/hyubbb' target='_blank'>
                <img src={githubIcon} alt='' />
              </a>
            </div>
          </LeftSectionProfile> */}
          <RightSectionProfile>
            <Title>
              안녕하세요.
              <p /> 프론트엔드 개발자{" "}
              <strong style={{ fontWeight: "900" }}>
                <mark>이창협</mark>
              </strong>
              입니다.
            </Title>
            <Comments>
              <div dangerouslySetInnerHTML={{ __html: text.comments }} />
            </Comments>
          </RightSectionProfile>
          {/* </Main> */}
        </div>
        <Skills />
        <Contact>
          <div className='title'>
            <h1>Contact</h1>
          </div>
          <div className='box'>
            <div className='text'>
              <div className='title'>
                <FaEnvelope />
                MAIL
              </div>
              <div>dlckdguq1011@naver.com</div>
            </div>

            <div className='text'>
              <div className='title'>
                <FaPhone />
                TEL
              </div>
              <div>010-4533-9426</div>
            </div>

            <div className='text'>
              <div className='title'>
                <FaGithub />
                GIT
              </div>
              <div>
                <a href='https://github.com/hyubbb' target='__blank'>
                  <u>hyubbb</u>
                </a>
              </div>
            </div>
          </div>
        </Contact>
      </Container>
    </>
  );
};

export default About;
