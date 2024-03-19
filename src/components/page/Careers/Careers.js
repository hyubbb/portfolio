import React, { useEffect, useState } from "react";
import {
  Companies,
  Company,
  CompanyCareer,
  Container,
  Main,
} from "../Careers/Careers.styles";

import { text } from "../../../assets/text";

// import Vanx from "./company-detail/Vanx";
import { Vanx, VanxDetail } from "./company-detail/Vanx";
import { Ub, UbDetail } from "./company-detail/Ub";
import { NavLink } from "react-router-dom";
import { Worldsky, WorldskyDetail } from "./company-detail/Worldsky";

const componyBox = {
  vanx: {
    name: Vanx,
    projects: VanxDetail,
  },
  unitedblades: {
    name: Ub,
    projects: UbDetail,
  },
  worldsky: {
    name: Worldsky,
    projects: WorldskyDetail,
  },
};

const Careers = () => {
  const { companies } = text;
  const [companyDetail, setCompanyDetail] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(""); // 현재 선택된 회사의 이름을 추적하는 상태

  const handler = (name, tempName) => {
    toggleActive(tempName);
    const companyName = name.toLowerCase().replace(" ", "");
    const company = componyBox[companyName];
    setSelectedCompany(companyName);
    setCompanyDetail(company);
  };

  const toggleActive = (tempName) => {
    const elm = document.querySelector(`.${tempName}`);
    const active = document.querySelector(".active-item");
    if (active) {
      active.classList.remove("active-item");
    }
    elm.classList.add("active-item");
  };

  useEffect(() => {
    handler("vanx", "vanx");
  }, []);

  return (
    <>
      <Main className='mainArticle'>
        {/* <h1 className='title'>| Careers</h1> */}
        <Container>
          {/* <div className='title'> </div> */}
          {/* <div style={{ padding: "20px" }}>d</div> */}
          <Companies>
            {companies.map(({ name, tempName, desc, period }, index) => {
              return (
                <Company
                  // className={({ isActive }) =>
                  //   isActive ? "active-item" : "inactive-item"
                  // }
                  key={index}
                  className={tempName}
                  onClick={() => handler(name, tempName)}
                >
                  <div>
                    <span className='name'>{name}</span>
                    <span className='period'>{period}</span>
                  </div>
                  <span className='desc'>{desc}</span>
                </Company>
              );
            })}
          </Companies>
          <CompanyCareer>
            <div className='left'>
              {/* <Vanx /> */}
              {companyDetail && <companyDetail.name />}
            </div>
            {/* {selectedCompany !== "worldsky" && (
                )} */}
            <div className='right'>
              {companyDetail && <companyDetail.projects />}
              {/* <VanxDetail /> */}
            </div>
          </CompanyCareer>
          {/* <Detail>
            <div className='left'>left</div>
            <div className='right'>
              <ProjectBox>
                <Inline />
              </ProjectBox>
              <ProjectBox>
                <Overlay />
              </ProjectBox>
              <ProjectBox>
                <Inline type='slide' />
              </ProjectBox>
              <ProjectBox>
                <Overlay type='slide' />
              </ProjectBox>
            </div>
          </Detail> */}
        </Container>
      </Main>
    </>
  );
};

export default Careers;
