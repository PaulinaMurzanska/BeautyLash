import React from 'react';
import styled from 'styled-components';
import { services } from '../constants/Services';
import { theme } from '../themes/ProjectTheme';
import Container from '../components/atoms/containers/Container.js'
import StyledSectionTitle from '../components/atoms/StyledSectionTitle';
import { useParams} from 'react-router-dom';

const StyledWrapper=styled.div`
width: 100%;
height: auto;
margin:50px auto;
box-shadow: ${theme.boxShadow};
border: 1px solid #27303914;

padding: 35px 25px;
@media (max-width:700px){
    padding: 35px 5px;
    margin-top:0;

}
`;

const StyledPhotoWrapper=styled.div`
width: 100%;
height:500px;
background-image: url(${({servicePhoto})=>servicePhoto});
background-position: center;
background-size: cover;
margin:40px auto;
border-radius:4px;
@media (max-width:700px){
    height: 250px;
}
`;
const StyledParagraph=styled.p`
font-size: 1.8rem;
letter-spacing: 1px;
line-height: 2.5rem;
margin-bottom: 15px;
`;
const StyledStarInfo=styled.span`
font-size: 1.2rem;
letter-spacing: 1px;
line-height: 1.8rem;
margin-bottom: 15px;
text-align: center;
margin-top:40px;
`;

const StyledDetailsWrapper=styled.div`
margin-top:40px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const StyledInfoBox =styled.div`
width: 250px;
height: 60px;
padding: 10px;
background-color: ${theme.themeColor};
color:white;
display: flex;
align-items: center;
justify-content: center;
margin-bottom:15px;
border-radius: 5px;

`;

const ServicesHub = () => {

    const paramsId = useParams().id;
    const chosenId = paramsId.substr(1,paramsId.length);

    const serviceToDisplay = services.filter((item)=> {
        return item.id===chosenId
    } )[0];

    return (
        <Container>
        <StyledWrapper>
            <StyledSectionTitle title={serviceToDisplay.serviceName}/>
            <StyledPhotoWrapper servicePhoto={serviceToDisplay.servicePhoto}/>
            <StyledParagraph>{serviceToDisplay.serviceDescription1}</StyledParagraph>
            <StyledParagraph>{serviceToDisplay.serviceDescription2}</StyledParagraph>
            <StyledDetailsWrapper>
       <StyledInfoBox>Orientacyjny czas zabiegu {serviceToDisplay.duration}  *</StyledInfoBox>
       <StyledInfoBox>Orientacyjna cena {serviceToDisplay.servicePrice} zł  *</StyledInfoBox>
       <StyledStarInfo>* Cena usługi i czas jej wykonania mogą różnić się ze względu na indywidualny charakter zabiegu</StyledStarInfo>

   </StyledDetailsWrapper>
        </StyledWrapper>
        </Container>

    )
}

export default ServicesHub
