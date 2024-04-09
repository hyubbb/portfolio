import React from "react";
import { Box, SectionText, SectionTitle, Sub__MainText } from "./Detail.styles";
import { mysqlIcon } from "../../../../assets/logo/logo";
import ImageWithTooltip from "../../../../hooks/ImageWithTooltip";

const SkillIcons = () => (
  <div>
    <ImageWithTooltip src={mysqlIcon} tooltipText='mysql' alt='mysql' />
  </div>
);

export const Worldsky = () => {
  return (
    <>
      <div>
        <SectionTitle>
          <div>
            SI 팀
            <br />
            <span className='sub'>#QA테스터</span>
          </div>
          {/* <Highlight></Highlight> */}
        </SectionTitle>
        <SectionText>
          <Sub__MainText>
            IOT서비스 관리 페이지의 QA테스트를 담당, 사용 사례의 DB데이터
            오류검증을 진행
          </Sub__MainText>
          <Sub__MainText>mysql 쿼리를 활용하여 데이터 처리 검증.</Sub__MainText>
          <Sub__MainText>
            다양한 데이터 시나리오를 구성하여, 로직검증을 수행.
          </Sub__MainText>
        </SectionText>
      </div>
      <Box>
        <span>Tech Stack</span>
        <SkillIcons />
      </Box>
    </>
  );
};
