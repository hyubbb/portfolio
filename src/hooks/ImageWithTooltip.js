import React from "react";
import "./ImageWithTooltip.scss";

const ImageWithTooltip = ({ src, alt, tooltipText }) => (
  <div className='tooltip'>
    <img src={src} alt={alt} />
    <span className='tooltip-text'>{tooltipText}</span>
  </div>
);

export default ImageWithTooltip;
