import React from 'react';
import foto1 from '../assets/images/lashes/2D.jpg';
import foto2 from '../assets/images/lashes/IMG_20211128_122231.jpg';
import foto3 from '../assets/images/lashes/IMG_20211128_122254.jpg';
import Slider from '../components/organinisms/slider/Slider';
import ServicesSection from '../components/organinisms/servicesSection/ServicesSection';

const imagesFrontPage = [`${foto1}`, `${foto2}`, `${foto3}`];

const HomePage = () => {
	return (
		<>
			<Slider imagesList={imagesFrontPage} />
			<ServicesSection />
		</>
	);
};

export default HomePage;
