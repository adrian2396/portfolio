import React from "react";

import styled, { css } from 'styled-components';
import Title from "../partials/title"

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    padding: 0px 280px;

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

const Skills = () => {
    return (
        <StyledSkills>
            <Title name = "Skills"/>
        </StyledSkills>
    );
}

export default Skills;