import React from "react";

import styled from 'styled-components';

import { navLinks, socialMedia } from "../config"

import Linkedin from "./icons/linkedin"
import Instagram from "./icons/instagram"
import Github from "./icons/github"

import Icons from "../components/icons/icon"


const StyledHeader = styled.header`
    display: flex;
    position: fixed;

    //z-index: 2;
    width: 100vw;
    height: 100px;
    background-color: #1D1D1D;
`;

const StyledLogo = styled.div`
    display: flex;
    text-decoration: none;

    a {
        display: flex;
        text-decoration: none;
    }
    .logoStyle1{
        font-family: 'Gotham Light', sans-serif;
        font-size: 70px;
        font-weight: 500;
        margin: -1px -4px 0 4px;
        color: #FD072D;
        transform: rotate(180deg);

    }
    .logoStyle2{
        font-family: 'Gotham Light', sans-serif;
        font-size: 70px;
        font-weight: 500;
        margin: 0px 0px 0 -42px;
        color: #08FDD8;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;

    position: relative;
    width: 100%;
    height: 100px;
    z-index: 3;
    padding: 0px 75px;
   
    @media (max-width: 1300px){
        padding: 0px 50px;
    }
    @media (max-width: 1080px){
        padding: 0px 40px;
    }
    @media (max-width: 768px){
        padding: 0px 25px;
    }
    @media (max-width: 300px){
        padding: 0px 10px;
    }
`;

const StyledLinks = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
    z-index: 12;
    ol {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
        margin: 0px;
        list-style: none;
        z-index: 12;
    }
    a {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        text-decoration: none;
    }
`;

const StyledFont = styled.p`
    font-family: 'Gotham', sans-serif;
    color: white;
    margin: 15px;
    font-size: 18px;  
    font-weight: 400;
    
    &:hover,
      &:focus {
        color: #FD072D;
      }
`;

const StyledSocialList = styled.li`  
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;

    margin: 0;
    padding: 0;
    list-style: none;

    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
    }
    li {
        a {
            width: 25px;
            height: 25px;
            padding: 0 10px;
            &:hover,
            &:focus {
                transform: translateY(-3px);
            }
            svg {
                width: 22px;
                height: 22px;
            }
        }
    }
`;



const Header = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <StyledLogo>
                    <a href="/">
                        <img src="https://i.ibb.co/L5m4D3q/logo.jpg" width={50} height={50} alt="logo" border="0"/>
                    </a>
                </StyledLogo>
                <StyledLinks>
                    <ol>
                    {navLinks.map(({name, url}, i) =>(
                        <li key={i}>
                        <a  href={url}>
                            <StyledFont>{name}</StyledFont>
                        </a>
                    </li>
                    ))}
                    </ol>
                </StyledLinks>
                <StyledSocialList>
                    {socialMedia.map(({name, url}, i) => (
                        <li key={i}>
                            <a href={url} aria-label= {name} target="_blank" rel="noreferrer">
                                <Icons name={name}/>                         
                            </a>
                        </li>
                    ))}
            </StyledSocialList>
            </StyledNav>
        </StyledHeader>
    );
};

export default Header;