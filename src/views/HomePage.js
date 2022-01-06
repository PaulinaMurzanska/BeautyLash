import React from 'react';
import Slider from '../components/organinisms/slider/Slider';
import ServicesSection from '../components/organinisms/servicesSection/ServicesSection';
import VoucherSection from '../components/organinisms/voucherSection/VoucherSection';
import { sliderGallery } from '../constants/Galleries';
import styled from 'styled-components';
import Container from '../components/atoms/containers/Container';

const StyledSliderOverlay = styled.div`
width: 100%;
position:absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 10;
text-align:left;
mix-blend-mode: difference; 

`;
const StyledSliderWrapper = styled.div`
position:relative;

`;
const StyledP = styled.p`
font-size: 6rem;
@media (max-width:700px){
	font-size: 4rem;

}

`;

const HomePage = () => {
	return (
		<>
		<StyledSliderWrapper>
			<Slider imagesList={sliderGallery} />
			<StyledSliderOverlay>
				<Container>				
				<StyledP>	Beauty Lash </StyledP>
				<StyledP style={{marginLeft:"50px"}}>	by </StyledP>
				<StyledP>	Justyna Procajło</StyledP>
				</Container>

			 </StyledSliderOverlay>
			</StyledSliderWrapper>
		
			<ServicesSection />
			<VoucherSection/>
		</>
	);
};

export default HomePage;
