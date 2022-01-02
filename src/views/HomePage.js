import React from 'react';
import foto1 from '../assets/images/lashes/47090835.jpg';
import foto2 from '../assets/images/lashes/47090835.jpg';
import foto3 from '../assets/images/lashes/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg';
import Slider from '../components/organinisms/slider/Slider';
import ServicesSection from '../components/organinisms/servicesSection/ServicesSection';
import VoucherSection from '../components/organinisms/voucherSection/VoucherSection';

const imagesFrontPage = [`${foto3}`,`${foto2}`];



const HomePage = () => {
	return (
		<>
			<Slider imagesList={imagesFrontPage} />
			<ServicesSection />
			<VoucherSection/>
		</>
	);
};

export default HomePage;
