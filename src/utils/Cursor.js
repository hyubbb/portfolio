import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CursorCss = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  color: white;
`;

const Cursor = () => {
  const ref = useRef(null);

  useEffect(() => {
    const cursor = ref.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return <CursorCss ref={ref} />;
};

export default Cursor;
