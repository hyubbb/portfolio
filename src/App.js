import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./components/page/HomePage/HomePage";
import { GlobalStyle } from "./Global.styles";
import Skills from "./components/page/Skills/Skills";
import Careers from "./components/page/Careers/Careers";
import Projects from "./components/page/Projects/Projects";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='skills' element={<Skills />} />
            <Route path='careers' element={<Careers />} />
            <Route path='projects' element={<Projects />} />
            <Route path='*' element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
