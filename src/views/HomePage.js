import React from 'react';
import Slider from '../components/organinisms/slider/Slider';
import ServicesSection from '../components/organinisms/servicesSection/ServicesSection';
import VoucherSection from '../components/organinisms/voucherSection/VoucherSection';
import { sliderGallery } from '../constants/Galleries';




const HomePage = () => {
	return (
		<>
			<Slider imagesList={sliderGallery} />
			<ServicesSection />
			<VoucherSection/>
		</>
	);
};

export default HomePage;
