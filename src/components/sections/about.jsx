import React from "react";

import styled from 'styled-components';
import Title from "../partials/title"

const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    padding: 20px 280px;

    height: calc(100vh - 175px);
    background-color: #1D1D1D;

    @media (max-width: 1300px){
        padding: 30px 150px;
    }
    @media (max-width: 1080px){
        padding: 30px 75px;
    }
    @media (max-width: 768px){
        padding: 30px 30px;
    }
`;

const StyledAboutInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
`

const StyledDescriptionContainer = styled.div`
    width: 30%;
    p{ 
        color: #b3b3b3;
        font-size: 13px;
        font-family: 'Gotham Light', sans-serif;
        font-weight: 200;
        letter-spacing: 1px;
        line-height: 19px;
        word-spacking: 1px;
        text-align: justify;
        text-justify: inter-palabra;
    }
`

const StyledPhoto = styled.div`
    img{
        
    }
`

const About = () => {
    return (
        <StyledAbout>
            <Title name = "About"/>
            <StyledAboutInfo>
                <StyledDescriptionContainer>
                <p>
                   Hi! My name is Adrian. My interest on electronics has 
                   grown over the years due to an amazing experiences in 
                   my academic journey. One of the most exciting was my stay
                   in Milano as an Erasmus student in 2019 wich made me get
                   out of my comfort zone improving both my social and technical skills.
                </p>
                <p>
                   One year later, I had my first professional experience working in a
                   company that collaborates with the University of Oviedo. 
                   In this job, I was developing my first Hardware & Software. During this period, my interest of web depelopment 
                   started, creating a friendly web user interface for this project. I used this project for my end-of-degree-project 
                   passed with hornors.
                </p>
                <p>
                   Nowadays, I'm working as a Electronic Engineer on I+D department at University of Oviedo developing an IOT project.
                   Over this year, I'm focusking on improve my Software and Hardware design sills
                   with especial enphasis on IOT systems and web development.
                </p>
                </StyledDescriptionContainer>
            </StyledAboutInfo>
        </StyledAbout>
    );
}

export default About;