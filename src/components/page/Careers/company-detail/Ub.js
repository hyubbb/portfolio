import React from "react";
import {
  Box,
  Highlight,
  Main,
  ProjectBox,
  SectionAd,
  SectionText,
  SectionTitle,
  Sub__MainText,
  Sub__SubText,
} from "./Detail.styles";
import {
  cssIcon,
  htmlIcon,
  jqueryIcon,
  jsIcon,
  phpIcon,
} from "../../../../assets/logo/logo";
import Inline from "../ad-form/Inline";
import Overlay from "../ad-form/Overlay";
import ImageWithTooltip from "../../../../hooks/ImageWithTooltip";

const SkillIcons = () => (
  <div>
    <ImageWithTooltip src={htmlIcon} tooltipText='Html' alt='Html' />
    <ImageWithTooltip src={cssIcon} tooltipText='Css' alt='Css' />
    <ImageWithTooltip src={jsIcon} tooltipText='Javascript' alt='Javascript' />
    <ImageWithTooltip src={phpIcon} tooltipText='PHP' alt='PHP' />
    <ImageWithTooltip src={jqueryIcon} tooltipText='jQuery' alt='jQuery' />
  </div>
);

export const Ub = () => {
  return (
    <>
      <SectionTitle>
        <div>광고 개발팀</div>
        <Highlight>
          다양한 형태의 광고포맷 개발과 클라이언트 관리페이지 구축 / 유지보수
          담당
        </Highlight>
      </SectionTitle>
      <SectionText>
        <Sub__MainText>
          기존 광고 발신 스크립트를 재사용 가능한 코드로{" "}
          <strong>리팩토링</strong>
        </Sub__MainText>
        <Sub__MainText>
          웹페이지에 표시되는 정적인 인라인 광고 포맷에서 모바일에도 대응이 되는{" "}
          <strong>광고 포맷 개발</strong>
        </Sub__MainText>
        <Sub__SubText>
          월 1억엔 이상 <strong>매출 추가 달성 가능</strong>
        </Sub__SubText>
        <Sub__MainText>회사 홈페이지 및 사내 관리페이지 제작</Sub__MainText>
        <Sub__MainText>
          클라이언트의 요구사항에 맞춰 광고 포멧 제작 및 미팅참여
        </Sub__MainText>
        <Sub__MainText>클라이언트 관리 페이지 제작 및 보수</Sub__MainText>
        <Sub__SubText>
          광고 수익 페이지를 기존 표 형태에서 차트 형태로 변경 - 사용자 만족도
          향상
        </Sub__SubText>
      </SectionText>
      <Box>
        <span>Tech Stack</span>
        <SkillIcons />
      </Box>
    </>
  );
};

export const UbDetail = () => {
  return (
    <>
      <Main>
        <SectionTitle>광고 스크립트의 작업의 일부</SectionTitle>

        <SectionAd>
          <div className='section'>
            <Inline />
            <h3>
              {"<"} 인라인 이미지 광고 {">"}
            </h3>
          </div>

          <div className='section'>
            <Overlay />
            <h3>
              {"<"} 오버레이 이미지 광고 {">"}
            </h3>
          </div>
        </SectionAd>
      </Main>
    </>
  );
};

// export default VanxDetail;
