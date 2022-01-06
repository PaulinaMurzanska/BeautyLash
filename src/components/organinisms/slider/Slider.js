import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Container from '../../atoms/containers/Container';

const StyledSliderOverlay = styled.div`
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	text-align: left;
	mix-blend-mode: difference;
`;
const StyledSliderWrapper = styled.div`
	position: relative;
`;
const StyledP = styled.p`
	font-size: 6rem;
	@media (max-width: 700px) {
		font-size: 4rem;
	}
`;

const Slider = ({ imagesList }) => {
	return (
		<StyledSliderWrapper>
			<Carousel
				fade
				style={{
					marginTop: `${
						window.screen.width > '700' ? '40px' : '10px'
					}`,
				}}
			>
				{imagesList.map((item, index) => (
					<Carousel.Item
						style={{
							height: `${
								window.screen.width > '700' ? '50vh' : '300px'
							}`,
							backgroundImage: `url(${item})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						foto={item}
						key={index}
					/>
				))}
			</Carousel>
			<StyledSliderOverlay>
				<Container>
					<StyledP> Beauty Lash </StyledP>
					<StyledP style={{ marginLeft: '50px' }}> by </StyledP>
					<StyledP> Justyna Procajło</StyledP>
				</Container>
			</StyledSliderOverlay>
		</StyledSliderWrapper>
	);
};

export default Slider;
