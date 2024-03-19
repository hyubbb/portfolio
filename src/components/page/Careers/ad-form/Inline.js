import React from "react";
import { InlineAd, ProjectBox } from "./projects.styles";
import Divs from "../../../../hooks/Divs";

const Inline = ({ type }) => {
  const adType = type === "slide" ? "slide" : "";
  const rand = Math.floor(Math.random() * 5) + 3;
  return (
    <>
      <ProjectBox>
        {Divs(1)}
        <InlineAd className={adType}>
          {adType !== "slide" ? <span>Inline AD</span> : <span>Video AD</span>}
        </InlineAd>
        {Divs(rand)}
        <InlineAd className={adType}>
          {adType !== "slide" ? <span>Inline AD</span> : <span>Video AD</span>}
        </InlineAd>
        {Divs(rand)}
      </ProjectBox>
    </>
  );
};
export default Inline;
