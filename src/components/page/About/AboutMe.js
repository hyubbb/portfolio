import React from "react";
import { Comments, RightSectionProfile, Title } from "./about.styles";
import { text } from "../../../assets/text";

const AboutMe = ({ className }) => {
  return (
    <section className={className}>
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
    </section>
  );
};

export default AboutMe;
