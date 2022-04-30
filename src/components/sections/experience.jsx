import React from "react";

import styled, { css } from 'styled-components';
import Title from "../partials/title"

const StyledExperience = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    padding: 20px 230px 100px 230px;

    height: calc(100vh - 175px);
    background-color: #1D1D1D;

    @media (max-width: 1300px){
        padding: 0px 50px 100px 50px;
    }
    @media (max-width: 768px){
        padding: 0px 30px;
    }
`;

const StyledInfo = styled.div`
    display: flex;

    span{

    }

    p{

    }




`
const StyledButton = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 80px;
    
    button{

    } 
`

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 10%;
  heigth: 90px;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? '' : '')};
  font-family: 'Gotham Light', sans-serif;
  font-size: 15px;
  text-align: left;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }
  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

const Experience = () => {
    return (
        <StyledExperience>
            <Title name = "Experience"/>
            <StyledInfo>
                <StyledButton></StyledButton>
            </StyledInfo>
        </StyledExperience>
    );
}

export default Experience;