import React from "react";

import styled from 'styled-components';
import Title from "../partials/title"

const StyledContact = styled.section`
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

const StyledDescriptionContainer = styled.div`
    p{

    }
`

const Contact = () => {
    return (
        <StyledContact>
            <Title name = "Contact"/>
        </StyledContact>
    );
}

export default Contact;