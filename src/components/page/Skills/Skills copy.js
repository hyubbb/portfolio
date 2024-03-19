import React from "react";
import { Skill } from "../About/about.styles";
import { Main, Section } from "./skills.styles";
import {
  jqueryIcon,
  jsIcon,
  phpIcon,
  vueIcon,
} from "../../../assets/logo/logo";
const Skills = () => {
  return (
    <Section>
      <div className='box'>
        {/* <h1>Skills</h1> */}
        <div className='cols'>
          <div className='col'>
            <h5>
              Strong <br />( 익숙한 기술 )
            </h5>
            <Skill>Javascript</Skill> / <Skill>css</Skill> / <Skill>html</Skill>
          </div>
          <div className='col'>
            <h5>
              {" "}
              Knowledgeable
              <br /> ( 업무에 활용 할 수 있는 기술 )
            </h5>
            <Skill>React</Skill> / <Skill>recoil</Skill> / <Skill>redux</Skill>{" "}
            / <Skill>redux-thunk</Skill> / <Skill>styled-component</Skill> /{" "}
            <Skill>tailwind</Skill> / <Skill>typescript</Skill>
          </div>
          <div className='col'>
            <h5>
              {" "}
              Experienced <br />( 사용해본적 있는 기술 ){" "}
            </h5>
            <Skill>webpack</Skill> / <Skill>vue</Skill> / <Skill>express</Skill>{" "}
            / <Skill>node </Skill> / <Skill>firebase</Skill> /{" "}
            <Skill>Jquery</Skill>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
