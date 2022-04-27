import React from "react";

import styled, { css } from 'styled-components';
import Title from "../partials/title"

const StyledExperience = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    padding: 30px 280px;

    height: calc(100vh - 175px);
    background-color: #1D1D1D;

    @media (max-width: 1300px){
        padding: 0px 150px;
    }
    @media (max-width: 1080px){
        padding: 0px 75px;
    }
    @media (max-width: 768px){
        padding: 0px 30px;
    }
`;

const Experience = () => {
    return (
        <StyledExperience>
            <Title name = "Experience"/>
        </StyledExperience>
    );
}

export default Experience;