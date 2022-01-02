import React from 'react'
import MenuTop from '../components/organinisms/menu/MenuTop';
import styled from 'styled-components';
import Footer from '../components/organinisms/footer/Footer';

const StyledWrapper=styled.div`
padding-top: 100px;
position: relative;

`;

const BaseTemplate = ({children}) => {
    return (
        <StyledWrapper>
            <MenuTop/>
            {children}
            <Footer/>
        </StyledWrapper>
    )
}

export default BaseTemplate
