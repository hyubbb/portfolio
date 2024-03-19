import React from "react";

const Divs = (lengthProp) => {
  const Style = {
    height: "15px",
    backgroundColor: "#c2c2c2",
    margin: "5px",
  };

  const divElm = Array.from({ length: lengthProp }, (_, index) => index);
  const result = divElm.map((v, i) => {
    const randWidth = Math.floor(Math.random() * 100);
    return <div key={i} style={{ ...Style, width: `${randWidth}%` }} />;
  });
  return result;
};

export default Divs;
