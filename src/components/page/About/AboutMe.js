import React from "react";
import {
  Comments,
  RightSectionProfile,
  ScrollIcon,
  Title,
} from "./about.styles";
import { text } from "../../../assets/text";

const AboutMe = ({ className }) => {
  return (
    <section className={className}>
      <RightSectionProfile>
        <Title>
          안녕하세요.
          <p /> 프론트엔드 개발자{" "}
          <strong style={{ fontWeight: "900" }}>
            <mark> 이창협 </mark>
          </strong>{" "}
          입니다.
        </Title>
        <Comments>
          <div dangerouslySetInnerHTML={{ __html: text.comments }} />
        </Comments>
      </RightSectionProfile>
      <ScrollIcon>
        <svg width='20px' viewBox='0 0 14.334 24.75'>
          <circle className='circle-1' fill='black' cx='7.167' cy='6' r='1.2' />
          <circle className='circle-2' fill='black' cx='7.167' cy='6' r='1.2' />
          <path
            stroke='black'
            fill='transparent'
            d='M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z'
          />
        </svg>
      </ScrollIcon>

      {/* </Main> */}
    </section>
  );
};

export default AboutMe;
