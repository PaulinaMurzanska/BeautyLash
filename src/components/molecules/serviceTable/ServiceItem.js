import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../themes/ProjectTheme';

const StyledWrapper=styled.div`
width: 100%;
margin-bottom: 30px;
box-shadow: ${theme.boxShadow};
border-bottom: 1px solid rgb(248, 245, 245);
`;
const StyledServiceName=styled.div`
width: 100%;
height: 40px;
margin-bottom: 5px;
padding-top: 15px;
font-size: 1.8rem;
text-transform: uppercase;
text-align: center;
height: 60px;
background-color:rgb(248, 245, 245);
color:${theme.fontColorMain};
@media (max-width:700px){
    font-size: 1.6rem;

    }
`;
const StyledServiceDetailsBox=styled.div`
width: 100%;
height: 60px;
display:flex;
justify-content: space-around;
`;
const StyledServiceInfo=styled.div`
width: 35%;
height: auto;
color:${theme.themeColor};
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
font-weight: normal;
@media (max-width:700px){
    font-size: 1.6rem;

    }
`;
const StyledStarInfo = styled.div`
	font-size: 1.2rem;
	letter-spacing: 1px;
	line-height: 1.8rem;
	text-align: center;
    @media (max-width:700px){
        margin-top: 10px;
	font-size: 1rem;

    }

`;

const ServiceItem = ({serviceName, price, duration}) => {
    return (
        <StyledWrapper>
            <StyledServiceName>{serviceName}</StyledServiceName>
            <StyledServiceDetailsBox>
                <StyledServiceInfo>Cena {price} *</StyledServiceInfo>
                <StyledServiceInfo>Czas {duration} *</StyledServiceInfo>
            </StyledServiceDetailsBox>
            <StyledStarInfo>
					* Cena usługi i czas jej wykonania mogą różnić się ze
					względu na indywidualny charakter zabiegu
				</StyledStarInfo>
            
        </StyledWrapper>
    )
}

export default ServiceItem
