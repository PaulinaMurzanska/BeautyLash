import React from 'react';
import styled from 'styled-components';
import Container from '../components/atoms/containers/Container';
import { theme } from '../themes/ProjectTheme';
import justyna from "../assets//images/lashes/justyna.jpg";

const StyledAboutText = styled.p`
	font-size: 1.5rem;
	margin-bottom: 10px;
`;
const StyledWrapper = styled.div`
display: flex;
margin-top:50px;
`;
const StyledPhotoWrap =styled.div`
width: 250px;
height: 250px;
border:1px solid ${theme.themeColor};
padding: 5px;
border-radius:4px;
img{
    width: 100%;
    height: 100%;
}
`;
const StyledAbout= styled.div`
padding: 0 30px;
width: 70%;
`;

const AboutMe = () => {
    return (
        <Container>
        <StyledWrapper>
        <StyledPhotoWrap>
                <img src={justyna}  alt="justyna"/>
            </StyledPhotoWrap>

            <StyledAbout>
            <StyledAboutText>
            Bardzo mi miło, że odwiedzasz stronę mojego studio.
            </StyledAboutText>
            <StyledAboutText> Mam na imie Justyna, stylizacją brwi i rzęs zajmuję się profesjonalnie od 5 lat,
             ale zawsze interesowałam się  tematami związanymi z wizażem i stylizacją.</StyledAboutText>
            <StyledAboutText>  Swoje umiejętności zdobyłam kończąć eliatArny kurs stylizacji  TUTAJ TYTUŁ KURSU.</StyledAboutText>
            <StyledAboutText>      W moim salonie oferuję nie tylko usługi zwiżane z oprawą oczu, 
            ale wykonuję również inne zabiegi pielęgnacyjne twarzy.</StyledAboutText>
            <StyledAboutText>
            Współpracuję z najlepszymi markami kosmetycznymi, dzięki czemu mam pewność, 
            ż emoje klientki sa pod nalpeszą opieką.</StyledAboutText>
            
            <StyledAboutText>Zapraszam do mojego salonu.</StyledAboutText>
            </StyledAbout>

        </StyledWrapper>
        </Container>
    )
}

export default AboutMe