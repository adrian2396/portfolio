import React from "react";

import styled from 'styled-components';
import Icons from "../components/icons/icon"


const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    width: 100vw;
    height: 75px;
    background-color: #1D1D1D;

    div {
        color: white;
    }
`;


const Footer = () => {
    return (
        <StyledFooter>
           <div>Designed & Build Adrián Vizcaíno</div>

        </StyledFooter>
    );
};

export default Footer;