import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/containers/Container';
import { theme } from '../../../themes/ProjectTheme';
import voucher from '../../../assets/images/voucher/voucherNewPhoto.jpg'

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
position: relative;

@media (max-width:700px){
    height: 300px;
}
`;
const StyledOverlay=styled.div`
width: 50%;
height: 30%;
position:absolute;
top:50%;
left: 30%;
transform: translate(-50% ,-50%);
font-size: 5rem;
display: flex;
justify-content: center;
align-items: center;
mix-blend-mode: difference;
`;
const StyledParagraph=styled.p`
font-size: 2.5rem;
letter-spacing: 1px;
line-height: 2.5rem;
width: 50%;
position:absolute;
top:50%;
left: 30%;
transform: translate(-50% ,-50%);


`;

const VoucherSection = () => {
    return (
        <Container>
        <StyledWrapper>
                <StyledTitle>Kup Voucher na zabiegi</StyledTitle> 

                <StyledPhotoWrapper>
                <StyledParagraph>Kup Voucher Upominkowy</StyledParagraph>
                    <StyledOverlay/>
                </StyledPhotoWrapper>
        </StyledWrapper>
        </Container>

    )
}

export default VoucherSection
