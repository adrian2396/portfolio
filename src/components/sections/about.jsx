import React from "react";

import { skills } from "../../config";

import styled from 'styled-components';
import Title from "../partials/title"

const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    padding: 20px 230px 100px 230px;

    height: calc(100vh - 165px);
    background-color: #1D1D1D;

    @media (max-width: 1300px){
        padding: 0px 50px 100px 50px;
    }
    @media (max-width: 1080px){
        padding: 0px 20px 100px 20px;
    }
`;

const StyledAboutInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
`

const StyledDescriptionContainer = styled.div`
    width: 32%;
    p{ 
        color: #b3b3b3;
        font-size: 15px;
        font-family: 'Gotham Light', sans-serif;
        font-weight: 100;
        letter-spacing: 1px;
        line-height: 19px;
        word-spacking: 1px;
        text-align: justify;
        text-justify: inter-palabra;
    }
`

const StyledPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    width: 34%;

    img{
        border-radius: 52px
    }

    }
`
const StyledSkills = styled.div`
    width: 34%;
    padding: 50px 0px 80px  0px;
    display: grid;
    ul{
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 10px;
        justify-items: center;

        width: auto;
        heigth: auto;
        padding: 0px 0px 0px 35px;
        list-style-type: none;
        margin: 0px;

        li{
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: 'Gotham Light', sans-serif;
            font-weight: 200;
            font-size: 15px;
            color: #b3b3b3;
            margin: 3px;
            width: 130px;

            &:before {
                content: '▹';
                position: absolute;
                left: 0;
                color: #FD072D;
                font-size: 15px;
                line-height: 15px;
            }
        }
    }
`
const StyledTopic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    u{
        margin: 10px 0px;
        font-family: 'Gotham Light', sans-serif;
        font-size: 17px;
        font-weight: 300;
        color: #09fdd9;
    }
`

const About = () => {
    
    const topics = ["Electronics", "Programming Language", "Frameworks & Libraries", "Tools"];
    
    return (
        <StyledAbout>
            <Title name = "About"/>
            <StyledAboutInfo>
                <StyledPhoto>
                       <img src="https://i.ibb.co/gSYrDpj/Adri-n-DSC-6406.jpg" width="65%" height="auto" alt="Adri-n-DSC-6406" border="0"/>
                </StyledPhoto>
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
                   In this job, I was developing my first Hardware & Software. During this period, my interest in web depelopment 
                   started creating a friendly web user interface for the device. I used this project for my end-of-degree-project 
                   passed with hornors.
                </p>
                <p>
                   Nowadays, I'm working as a Electronic Engineer on I+D department at University of Oviedo developing an IOT device.
                   Over this year, I'm focusking on improve my Software and Hardware design sills
                   with especial enphasis on IOT systems and web development.
                </p>
                </StyledDescriptionContainer>
                <StyledSkills>
                      {skills.map(({topic, skill}, i) => (
                        <>
                            <StyledTopic>
                               <u>{topic}</u>
                            </StyledTopic>
                            <ul>                            
                            {skill.map(({s1,s2,s3,s4},i) => (
                                <>
                                <li>{s1}</li>
                                <li>{s2}</li>
                                <li>{s3}</li>
                                <li>{s4}</li>
                                </>
                            ))}
                            </ul>
                        </>
                      ))}
                </StyledSkills> 
            </StyledAboutInfo>
        </StyledAbout>
    );
}

export default About;