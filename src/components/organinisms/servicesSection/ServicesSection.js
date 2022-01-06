import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/containers/Container.js'
import IntroText from '../../atoms/IntroText.js';
import SectionHeader from '../../molecules/SectionHeader.js';
import ServicesGrid from './ServicesGrid.js';

const StyledWrapper=styled.div`
margin-top: 100px;
height: auto;
@media (max-width:700px){
    margin-top:40px;
}
`;

const aboutServices="Witaj! Zapraszam do zapoznania się z listą zabiegów jakie wykonuję w moim salonie."

const ServicesSection = ({text}) => {
    return (
        <StyledWrapper id="uslugi">
            <Container>
                <SectionHeader title="Oferowane usługi"/>
                <IntroText text={aboutServices}/>
                <ServicesGrid/>
            </Container>
        </StyledWrapper>
    )
}

export default ServicesSection
