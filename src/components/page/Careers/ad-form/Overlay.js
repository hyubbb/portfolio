import React, { useEffect } from "react";
import Divs from "../../../../hooks/Divs";
import { OverlayAd, ProjectBox } from "./projects.styles";

const Overlay = ({ type }) => {
  const adType = type === "slide" ? "slide" : null;
  return (
    <>
      <ProjectBox>
        {Divs(20)}
        <OverlayAd className='overlay'>
          <span className='overlay_main'>
            {adType !== "slide" ? (
              <span>Overlay</span>
            ) : (
              <>
                <div className='video'>video</div>
                <div className='text'>text</div>
              </>
            )}
          </span>
          <span className='overlay_sub'>Sponsored</span>
        </OverlayAd>
      </ProjectBox>
    </>
  );
};

export default Overlay;
