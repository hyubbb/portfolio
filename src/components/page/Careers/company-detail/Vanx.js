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
        <Sub__MainText>자사 관리 페이지 구축 및 유지보수</Sub__MainText>
        <Sub__MainText>
          클라이언트와의 직접적인 <strong>소통과 응대</strong> 영업사원들에게
          자사 광고 시스템 교육
        </Sub__MainText>
        <Sub__MainText>
          광고 검증 데모 페이지를 독립적으로 개발하여 영업 팀의{" "}
          <strong>업무 자립성 강화</strong>
        </Sub__MainText>
        <Sub__SubText>
          개발팀의 지원 없이 광고 발신을 가능하게 해{" "}
          <strong>업무 효율성을 대폭 향상</strong>
        </Sub__SubText>
        <Sub__MainText>
          자사 자체 광고 입찰 단가 관리 시스템에 클라이언트 관리페이지를 담당
        </Sub__MainText>
      </SectionText>
      <Box>
        <span>Tech Stack</span>
        <SkillIcons />
      </Box>
      <Box>
        <span>그 외</span>
        <SectionText>
          <Sub__MainText>첫번째 개발자로 입사하여 개발팀 구성</Sub__MainText>
          <Sub__MainText>
            사내에 게임동아리를 만들어, 타 부서와 친목 도모
          </Sub__MainText>
        </SectionText>
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
            <SectionText>
              <Sub__MainText>모바일용 페이지 전용광고를 발신</Sub__MainText>
              <Sub__MainText>
                떨어지는 속도나 보여지는 속도 등에 의해 광고 효율 극대화{" "}
              </Sub__MainText>
              <Sub__MainText>광고 단가입찰을 통해 광고 선택 발신</Sub__MainText>
              <Sub__MainText>
                안건에 따라 이미지와 동영상 교체 발신 가능
              </Sub__MainText>

              <Sub__MainText>광고 문구 입력 / 색상지정 가능 </Sub__MainText>
            </SectionText>
          </div>

          <div className='section'>
            <Inline type={"slide"} />
            <h3>
              {"<"} 인라인 동영상 광고 {">"}
            </h3>
            <SectionText>
              <Sub__MainText>해당위치 도달시에 동영상 광고표시</Sub__MainText>

              <Sub__MainText>광고클릭율(ctr) 상승</Sub__MainText>
              <Sub__MainText>광고 문구 입력 / 색상지정 가능, </Sub__MainText>
              <Sub__MainText>클릭시에 광고 PR페이지로 이동</Sub__MainText>
            </SectionText>
          </div>
        </SectionAd>
      </Main>
    </>
  );
};

// export default VanxDetail;
