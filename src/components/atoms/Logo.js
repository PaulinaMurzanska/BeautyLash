import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/logo/logoLashesNew.png"

const StyledLogoWrapper =styled.div`
width: 15%;
height:auto;
position: absolute;
top: 5px;
left: 0;
@media (max-width:700px){
    top:0;
}

`;
const StyledLogoBox =styled.div`
width: 55px;
height: 55px;
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
