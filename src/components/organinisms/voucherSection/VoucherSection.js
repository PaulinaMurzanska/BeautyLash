import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/containers/Container';
import { theme } from '../../../themes/ProjectTheme';
import voucher from '../../../assets/images/voucher/voucher2.png'

const StyledWrapper=styled.div`
margin-top: 80px;
`;
const StyledTitle=styled.h3`
font-size: 3rem;
padding-bottom: 10px;
border-bottom: 2px solid ${theme.themeColor};

`;
const StyledPhotoWrapper=styled.div`
width: 100%;
height: 700px;
background-image: url(${voucher});
background-position: center;
background-size: cover;
margin-top:20px;
margin-bottom:80px;
@media (max-width:700px){
    height: 300px;
}
`;

const VoucherSection = () => {
    return (
        <Container>
        <StyledWrapper>
                <StyledTitle>Kup Voucher na zabiegi</StyledTitle> 
                <StyledPhotoWrapper/>
        </StyledWrapper>
        </Container>

    )
}

export default VoucherSection
