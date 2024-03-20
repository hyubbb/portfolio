import React from "react";
import { Skill } from "../About/about.styles";
import { Box, Main, Section } from "./skills.styles";
import {
  cssIcon,
  htmlIcon,
  jqueryIcon,
  jsIcon,
  phpIcon,
  vueIcon,
  reduxIcon,
  reactIcon,
  recoilIcon,
  styledIcon,
  tailwindIcon,
  typescriptIcon,
  nodeIcon,
  firebaseIcon,
  webpackIcon,
} from "../../../assets/logo/logo";
import ImageWithTooltip from "../../../hooks/ImageWithTooltip";

const SkillIcons = () => (
  <Box>
    <ImageWithTooltip src={htmlIcon} alt='html' tooltipText='Html' />
    <ImageWithTooltip src={cssIcon} alt='html' tooltipText='Css' />
    <ImageWithTooltip src={jsIcon} alt='html' tooltipText='Javascript' />
  </Box>
);

const SkillIcons2 = () => (
  <Box>
    <ImageWithTooltip src={reactIcon} tooltipText='React' alt='React' />
    <ImageWithTooltip src={recoilIcon} tooltipText='Recoil' alt='recoil' />
    <ImageWithTooltip src={reduxIcon} tooltipText='Redux' alt='redux' />
    <ImageWithTooltip
      src={typescriptIcon}
      tooltipText='Typescript'
      alt='typescript'
    />
    <ImageWithTooltip
      src={tailwindIcon}
      tooltipText='Tailwindcss'
      alt='tailwindcss'
    />
    <ImageWithTooltip
      src={styledIcon}
      tooltipText='Styled-Components'
      alt='styledComponents'
    />
  </Box>
);

const SkillIcons3 = () => (
  <Box>
    <ImageWithTooltip src={webpackIcon} tooltipText='Webpack' alt='webpack' />
    <ImageWithTooltip
      src={firebaseIcon}
      tooltipText='Firebase'
      alt='firebase'
    />
    <ImageWithTooltip src={nodeIcon} tooltipText='Node' alt='node' />
    <ImageWithTooltip src={vueIcon} tooltipText='Vuejs' alt='vuejs' />
    <ImageWithTooltip src={jqueryIcon} tooltipText='Jquery' alt='jquery' />
  </Box>
);

const Skills = ({ className }) => {
  return (
    <Section className={className}>
      <div className='title'>
        <h1>SKILL</h1>
      </div>
      <div className='box'>
        {/* <h1>Skills</h1> */}
        <div className='col'>
          <h5>
            Strong <br />
            <span className='subText'>( 익숙한 기술 )</span>
          </h5>
          <SkillIcons />
        </div>
        <div className='col'>
          <h5>
            Knowledgeable
            <br />
            <span className='subText'>( 업무에 활용 할 수 있는 기술 )</span>
          </h5>

          <SkillIcons2 />
        </div>
        <div className='col'>
          <h5>
            Experienced <br />
            <span className='subText'>( 사용해본적 있는 기술 ) </span>
          </h5>

          <SkillIcons3 />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
