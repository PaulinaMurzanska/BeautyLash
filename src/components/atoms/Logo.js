import { height } from 'dom-helpers';
import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/lashes/logolashes.png"

const StyledLogoWrapper =styled.div`
width: 15%;
height:auto;
position: absolute;
top: 5px;
left: 0;

`;
const StyledLogoBox =styled.div`
width: 50px;
height: 50px;
background-image: url(${logo});
background-position: center;
background-size: cover;

`;

const Logo = () => {
    return (
        <StyledLogoWrapper>
          <a href="/">
          <StyledLogoBox/>

       
        
            </a>
          
        </StyledLogoWrapper>
    )
}

export default Logo
