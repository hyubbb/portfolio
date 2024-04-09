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
  vueIcon,
} from "../../../../assets/logo/logo";
import Inline from "../ad-form/Inline";
import Overlay from "../ad-form/Overlay";
import ImageWithTooltip from "../../../../hooks/ImageWithTooltip";

const SkillIcons = () => (
  <div>
    <ImageWithTooltip src={htmlIcon} tooltipText='Html' alt='Html' />
    <ImageWithTooltip src={cssIcon} tooltipText='Css' alt='Css' />
    <ImageWithTooltip src={jsIcon} tooltipText='Javascript' alt='Javascript' />
    <ImageWithTooltip src={vueIcon} tooltipText='Vue.js' alt='Vue.js' />
    <ImageWithTooltip src={phpIcon} tooltipText='PHP' alt='PHP' />
    <ImageWithTooltip src={jqueryIcon} tooltipText='jQuery' alt='jQuery' />
  </div>
);

export const Vanx = () => {
  return (
    <>
      <SectionTitle>
        {/* <div style={{ marginBottom: "20px" }}>광고 개발팀</div> */}
        <div>광고 개발팀</div>
        <Highlight>
          다양한 형태의 광고포멧 개발과 클라이언트 관리페이지 구축 / 유지보수
          담당
        </Highlight>
      </SectionTitle>
      <SectionText>
        <Sub__MainText>
          새로운 형태의 광고(동적모델, 동영상) 발신 스크립트의 모델을 만들어
          수익 창출
        </Sub__MainText>
        <Sub__SubText>
          6개월간 수익목표 <strong>달성률 100%</strong> 달성
        </Sub__SubText>
        <Sub__SubText>
          새로운 포멧이 추가되면서 resize, scroll이벤트에 대한
          부하발생-쓰로틀링/디바운싱을 사용하여 이벤트를 제어
        </Sub__SubText>
        <Sub__MainText>
          광고 검증 데모 페이지를 독립적으로 개발하여 영업 팀의 광고 처리
          자립성을 강화하고, 개발팀의 지원 없이도 빠른 광고 반영을 가능하게 해
          업무 효율성을 대폭 향상.
        </Sub__MainText>
        <Sub__MainText>자사 관리 페이지 구축 및 유지보수</Sub__MainText>
        <Sub__MainText>
          자사 자체 광고 입찰 단가 관리 시스템에 클라이언트 관리페이지를 담당.
        </Sub__MainText>
      </SectionText>
      <Box>
        <span>Tech Stack</span>
        <SkillIcons />
      </Box>
    </>
  );
};

export const VanxDetail = () => {
  return (
    <>
      <Main>
        <SectionTitle>광고 스크립트의 작업의 일부</SectionTitle>

        <SectionAd>
          <div className='section'>
            <Overlay type={"slide"} />
            <h3>
              {"<"} 오버레이 동영상 광고 {">"}
            </h3>
          </div>

          <div className='section'>
            <Inline type={"slide"} />
            <h3>
              {"<"} 인라인 동영상 광고 {">"}
            </h3>
          </div>
        </SectionAd>
      </Main>
    </>
  );
};

// export default VanxDetail;
