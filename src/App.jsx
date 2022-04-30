import React from "react";
import styled from 'styled-components';

import Header from "./components/header";
import Presentation from "./components/sections/presentation";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Works from "./components/sections/works";
import Skills from "./components/sections/skills";
import Contact from "./components/sections/contact";
import Footer from "./components/footer";

import { BrowserRouter } from "react-router-dom";

const StyledApp = styled.div`
  display: block;
  flex-direction: column;

  background-color: #1D1D1D;  
  height: 100vh;
  width: 100vw;
`;

const StyledSections = styled.div`
      display: block;
      overflow-y: scroll;
      width: 100%;
      height: calc(100vh - 165px);
      background-color: white;
      position: relative;
      top: 90px;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header/>
        <StyledSections>
          <Presentation/>
          <About/>
          <Experience/>
          <Works/>
          <Contact/>
        </StyledSections>
      </StyledApp> 
    </BrowserRouter>
  );
}

export default App;
