import React, {useState} from "react";

import styled, { css } from 'styled-components';
import Title from "../partials/title"

import { experience } from "../../config";

const StyledExperience = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    padding: 20px 250px 100px 250px;

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
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;

    height: 100%;

    margin: 35px 0px;
`
const StyledButton = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    width: 700px;
    height: 40px;
    padding-left: 40px;
    
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        flex-direction: row;

        width: 200px;
        height: 40px;
        border: none;

        font-family: 'Gotham Light', sans-serif;
        font-size: 25px;
        text-align: left;
        font-weight: 600;

        &:hover,
        &:focus {
            background-color: #292929;
            color: #FD072D;
            font-weight: 300;
        }
    } 
`
const StyledDescription = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;

    width: 700px;
    height: 350px;

    span {
        padding-left: 40px;
        padding-left: 40px;
        margin-bottom: 0px;
        font-family: 'Gotham Light', sans-serif;
        font-size: 21px;
        text-align: justify;
        color: #b3b3b3;
        margin: 1px;
        a{
            text-align: justify;
            margin-left: 15px;
            color: #09fdd9;
            a:active {
                color: #09fdd9;
            }
        }
    }

    p{
        padding-left: 40px;
        margin: 2px;
        text-align: justify;
        font-size: 20px;
        margin: 4px 0px 0px 0px;
        font-family: 'Gotham Light', sans-serif;
        color: #515152;
    }

    ul{

        list-style-type: none;

        li{
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            text-align: justify;
            font-family: 'Gotham Light', sans-serif;
            font-size: 17px;
            letter-spacing: 1px;
            line-height: 19px;
            word-spacking: 1px;
            color: #b3b3b3;

            &:before {
                content: '▹';
                left: 0;
                position: absolute;
                color: #FD072D;
                font-size: 15px;
                line-height: 15px;
            }
        }
    }
`

const Experience = () => {

    const [active, setActive] = useState(true);

    const handleOnClick = (event) => {
        event.target.name == 'Ingen10' ? setActive(true) : setActive(false);

        console.log(event.target.name);
    }

    return (
        <StyledExperience>
            <Title name = "Experience"/>
            <StyledInfo>
                <StyledButton>
                    <button 
                        name="Ingen10"
                        style={active ? {backgroundColor: "#515152" , color:"#FD072D"}: {backgroundColor: "#1D1D1D", color:"#515152"}}
                        onClick={handleOnClick}>Ingen10
                    </button>
                    <button 
                        name="UNIOVI"
                        style={active ?  {backgroundColor: "#1D1D1D", color:"#515152"} : {backgroundColor: "#515152", color:"#FD072D"}}
                        onClick={handleOnClick}>UNIOVI
                    </button>
                </StyledButton>
                {active ? 
                    <>
                       <StyledDescription>
                           <span>
                               Electronics Engineering Intershipn
                               <a  href="http://www.ingen10.com/"  target="_blank" rel="noreferrer">@Ingen10</a>
                           </span>
                           <p>June 2020 - May 2021</p>
                           <ul>
                               <li>Design of a portable prototype for testing photodynamic treatments on cancerous tissues</li>
                               <li>Hardware & Software Design </li>
                               <li>Commissioning and servicing of existing devices</li>
                               <li>ESP32 microcontroller programming (C/C++)</li>
                               <li>Design of a web page as user interface for the prototype (HTML, CSS, Javascript, Bootstrap, AYAX)</li>
                               <li>PCB design and soldering</li>
                           </ul>
                       </StyledDescription>
                    </>
                    :
                    <>
                      <StyledDescription>
                          <span>
                              R&D Electronic Engineer
                              <a href="https://www.uniovi.es/"  target="_blank" rel="noreferrer">@UNIOVI</a>
                          </span>
                          <p>Jan. 2022 - Act.</p>
                          <ul>
                              <li>Design of an IOT architecture for the development of a medical device which measures the RGB spectrum in blood</li>
                              <li>Hardware & Software Design</li>
                              <li>Protocols used: Wifi, Bluetooth, HTTP, MQTT, LoraWAN, I2C and SPI</li>
                              <li>ESP32 microcontroller programming (C/C++)</li>
                              <li>Frontend: web app implementation with React.js</li>
                              <li>Backend: implementation of a server (node.js) and a database (MongoDB)</li>
                          </ul>
                      </StyledDescription>
                    </>
                }
            </StyledInfo>
        </StyledExperience>
    );
}

export default Experience;