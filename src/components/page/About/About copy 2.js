import React, { useEffect } from "react";
import {
  AboutMe,
  Asd,
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
  // console.log(dynamicText);
  // Variables to track the position and deletion status of the word
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
      // If condition is true, type the next character
      charIndex++;
      timer = setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
      // If condition is true, remove the previous character
      charIndex--;
      timer = setTimeout(typeEffect, 100);
    } else {
      // If word is deleted then switch to the next word
      console.log("first");
      clearTimeout(timer);
      isDeleting = !isDeleting;
      console.log(isDeleting, wordIndex);
      dynamicText.classList.remove("stop-blinking");
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      console.log(wordIndex);
      setTimeout(typeEffect, 1000);
    }
  };
  // typeEffect();
  useEffect(() => {
    typeEffect();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          fontSize: "12px",
          flexWrap: "wrap",
          width: "1200px",
          overflow: "hidden",
        }}
      >
        {/* Front-end Developer */}
        <div
          style={{
            fontSize: "8rem",
            overflow: "hidden",
            flex: "7",
            height: "500px",
          }}
        >
          <Asd className='asd'>
            <span></span>
          </Asd>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "3",
          }}
        >
          <img
            style={{ borderRadius: "50px", flex: "1" }}
            src={profile}
            alt='profile'
          />
          <span style={{ fontSize: "80px" }}>이창협입니다.</span>
        </div>
      </div>

      <Container></Container>
    </>
  );
};

export default About;
