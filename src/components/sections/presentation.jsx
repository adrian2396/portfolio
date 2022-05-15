import React from "react";

import styled from 'styled-components';

const StyledPresentation = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    padding: 20px 290px 50px 290px;
    height: calc(100vh - 165px);
    background-color: #1D1D1D;

    @media (max-width: 1300px){
        padding: 0px 150px 100px 150px;
    }
    @media (max-width: 768px){
        padding: 0px 30px;
    }
`;

const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const StyledHi = styled.div`
    margin-bottom: 5px;

    h1{
        margin: 0px;
        font-family: 'Gotham Light', sans-serif;
        font-size: clamp(30px, 7vw, 64px);
        font-weight: 600;
        color: white;
    }
`;
const StyledNm = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h1{
        margin: 0px;
        font-family: 'Gotham Light', sans-serif;
        font-size: clamp(30px, 7vw, 64px);
        font-weight: 600;
        color: white;
        margin-right: 10px;
    }
    h2 {
        margin: 0px;
        font-family: 'Gotham Light', sans-serif;
        font-size: clamp(30px, 7vw, 64px);
        font-weight: 600;
        color: #FD072D;
    }
`;

const StyledProffesion1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 10px;
    margin-bottom: 10px;

    h1 {
        margin: 0px;
        font-family: 'Gotham Light', sans-serif;
        font-size: clamp(25px, 4vw, 55px);
        font-weight: 600;
        color: #c5c5c5;
    }
`;

const StyledProffesion2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 20px;
    margin-bottom: 10px;

    width: 740px;
    height: auto;
    
    @media (max-width: 1080px){
        width: 700px:;
        height: auto;
    }
    @media (max-width: 768px){
        width: 500px;
        height: auto;
    }
    @media (max-width: 720px){
        width: 400px;
        height: auto;
    }
    @media (max-width: 500px){
        width: 300px;
        height: auto;
    }
    @media (max-width: 350px){
        width: 250px;
        height: auto;
    }

    h2 {
        margin: 0px;
        font-family: 'Gotham Light', sans-serif;
        font-size: clamp(10px, 2vw, 18px);
        font-weight: 200;
        color: #515152;
        line-height: 150%;
        text-align: justify;
    }
`;

const StyledButtom = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 56px;
    background-color: white;
    border-radius: 10px;
    border-color: red;
    background-color: #1D1D1D;

    margin-top: 20px;
    margin-bottom: 50px;

    border: 2px solid #FD072D;

    &:hover,
      &:focus {
        background-color: #FD072D20;
      }

    a {
        color: #FD072D;
        text-decoration: none;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 500;
        font-size: 25px;
    }
`;


const Presentation = () => {
    const Info = () => {
        return (
            <StyledDescription>
                <StyledHi>
                    <h1>Hi,</h1>
                </StyledHi>
                <StyledNm>
                    <h1>I'm  </h1>
                    <StyledNm>
                    <h2>A</h2>
                    <h1>drián</h1>
                    </StyledNm>
                    <StyledNm>
                    <h2>V</h2>
                    <h1>izcaíno,</h1>
                    </StyledNm>
                </StyledNm>
                <StyledProffesion1>
                    <h1>Electronic & Atutomation Engineer.</h1>
                </StyledProffesion1>
                <StyledProffesion2>
                    <h2>I am an Electronics and Automation Engineer specialized in Hardware and Software development, mainly focused on IOT systems. 
                        I also got a medium knowledge in full stack development building some User Interfaces on the web for the projects I have worked on.</h2>
                </StyledProffesion2>
                <StyledButtom>
                    <a className="" href="">
                        Resume
                    </a>    
            </StyledButtom>
            </StyledDescription>
        );
    }
    return (
        <StyledPresentation>
            <Info/>
        </StyledPresentation>
    );
}


export default Presentation;

