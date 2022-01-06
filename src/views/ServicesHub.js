import React from 'react';
import styled from 'styled-components';
import { services } from '../constants/Services';
import Container from '../components/atoms/containers/Container.js';
import { useParams } from 'react-router-dom';
import ServicePhotoGallery from '../components/molecules/servicePhotoGallery/ServicePhotoGallery';
import ServiceDescription from '../components/molecules/servicesDescription/ServiceDescription';
import ServicesTable from '../components/molecules/serviceTable/ServicesTable';
import SectionHeader from '../components/molecules/SectionHeader';

const StyledWrapper = styled.div`
	width: 100%;
	height: auto;
	margin: 20px auto;
	padding: 35px 25px;
	@media (max-width: 700px) {
		padding: 35px 5px;
		margin-top: 0;
	}
`;

const ServicesHub = () => {
	const paramsId = useParams().id;
	const chosenId = paramsId.substr(1, paramsId.length);


	const serviceToDisplay = services.filter((item) => {
		return item.id === chosenId;
	})[0];

	return (
		<Container>
			<StyledWrapper>
				<SectionHeader title={serviceToDisplay.serviceName}/>
				<ServicePhotoGallery servicePhoto={serviceToDisplay.servicePhoto}/>
				<ServiceDescription descriptions={serviceToDisplay.serviceDescription}/>
				<ServicesTable details={serviceToDisplay.sericesDetails}/>
			</StyledWrapper>
	
		</Container>
	);
};

export default ServicesHub;
