import React from 'react'
import MenuTop from '../components/organinisms/menu/MenuTop';
import styled from 'styled-components';

const StyledWrapper=styled.div`
padding-top: 100px;

`;

const BaseTemplate = ({children}) => {
    return (
        <StyledWrapper>
            <MenuTop/>
            {children}
        </StyledWrapper>
    )
}

export default BaseTemplate
