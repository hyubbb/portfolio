import React, { useEffect } from "react";
import {
  AboutMe,
  TypingAnimation,
  Container,
  ImgIcon,
  LeftSectionAbout,
  LeftSectionProfile,
  Main,
  RightSectionAbout,
  RightSectionProfile,
  Skill,
  Title,
} from "./about.styles";
import profile from "../../assets/profile.jpg";
const About = () => {
  const words = ["Front-end \n Developer", "フロント・エンドエンジニア"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timer;
  const typeEffect = () => {
    const dynamicText = document.querySelector(".asd span");
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      timer = setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      timer = setTimeout(typeEffect, 100);
    } else {
      clearTimeout(timer);
      isDeleting = !isDeleting;
      dynamicText.classList.remove("stop-blinking");
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1000);
    }
  };
  // typeEffect();
  useEffect(() => {
    // typeEffect();
  }, []);
  return (
    <>
      <Container>
        <LeftSectionProfile>
          <TypingAnimation className='asd'>
            Front-end Developer
            <span></span>
          </TypingAnimation>
        </LeftSectionProfile>
        <RightSectionProfile>
          <ImgIcon src={profile} alt='profile' />
          <br />
          <span style={{ fontSize: "40px" }}>이창협 입니다.</span>
        </RightSectionProfile>
      </Container>
    </>
  );
};

export default About;
