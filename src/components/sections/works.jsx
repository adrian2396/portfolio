import React from "react";

import styled from 'styled-components';
import Title from "../partials/title"

import { works } from "../../config";

const StyledWorks = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    padding: 20px 230px 100px 230px ;

    height: auto;
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

const StyledDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap; 
    margin-top: 25px;

    padding: 0px 70px;

    @media (max-width: 1200px){
        padding: 0px 20px;
    }

    a{
        font-family: 'Gotham Light',sans-serif;
        text-decoration: none;
        font-size: 22px;
        font-weight: 700;
        text-align: justify;
        color: #FD072D;
        margin-bottom: 5px;
        margin-top: 5px;
        //margin-left: 10px;
    }   
    span{
        font-family: 'Gotham Light',sans-serif;
        font-size: 19px;
        text-align: justify;
        color: #b3b3b3;
        margin-bottom: 10px;
        //margin-left: 10px;
        font-weight: 400;
    }
    ul{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 0px;
        list-style-type: none;
        margin: 10px 0px;

        li{
            font-family: 'Gotham Light',sans-serif;
            font-size: 16px;
            text-align: justify;
            color: #b3b3b3;
            margin-left: auto;
            margin-right:auto;
            font-weight: 700;

        }
    }
    
`

const StyledImg = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    height: auto;
    align-items: center;
    padding: 0px 10px;
    img{
        postion: relative;
        margin: 10px 10px 10px -20px;
        border-radius: 5px;
        //border: 2px solid #FD072D;
    }

`
const StyledAbstract = styled.div`
    background-color:  #504f4f;
    border-radius: 5px;
    margin: 0px 15px;
    margin: 5px 0px 80px 0px;
    p{
        
        text-align: justify;
        font-family: 'Gotham Light', sans-serif;
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 22px;
        word-spacking: 1px;
        color: #f3f3f3;
        margin: 10px 10px;
        font-weight: 500;
    }

`

const Works = (props) => {
    return (
        <StyledWorks>
            <Title name = "Works"/>
            <StyledDescriptionContainer>
                {works.map(({name, type, device, pcb, web, abstract, tools}, i) => (
                    <>
                        <a href="">{name}</a>    
                        <span>{type}</span>
                        <StyledImg>
                            <img src={pcb}  style={{ zIndex: "2" }} alt="pcb" width="auto" height="150" border="0"/>
                            <img src={device}   style={{ zIndex: "1" }} alt="device" width="270px" height="auto" border="0"/>
                            <img src={web}   style={{ zIndex: "2" }} alt="web" width="auto" height="150" border="0"/>
                        </StyledImg>
                        <ul>
                            {tools.map(({tool}, i) =>(
                                <li>{tool}</li>
                            ))}
                        </ul>
                        <StyledAbstract>
                            <p>{abstract}</p>
                        </StyledAbstract>
                    </>
                ))}
            </StyledDescriptionContainer>
        </StyledWorks>
    );
}

export default Works;