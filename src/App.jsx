import styled, { css } from 'styled-components';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Header from "./components/header";

const StyledApp = styled.div`
  background-color: #1D1D1D;  
  height: 100vh;
`;

const StyledSections = styled.main`
      width: 100%;
      height: calc(100vh - 100px);
      background-color: white;
      position: relative;
      top: 100px;
`;


function App() {
  return (
    <StyledApp>
      <Header/>
    </StyledApp> 
  );
}

export default App;
