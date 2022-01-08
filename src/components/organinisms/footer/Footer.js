import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/containers/Container';
import logo from '../../../assets/images/logo/logoLashesNew.png';
import { theme } from '../../../themes/ProjectTheme';
import { GiVibratingSmartphone } from 'react-icons/gi';
import { SiMaildotru } from 'react-icons/si';
import { FiHome } from 'react-icons/fi';
import FooterAbout from '../../atoms/footerAtoms/FooterAbout';
import FootersHours from '../../atoms/footerAtoms/FootersHours';
import PhoneBtn from '../../atoms/footerAtoms/PhoneBtn';
import Logotest from '../../../views/Logotest';
import{RiMessengerLine} from "react-icons/ri";

const StyledWrapperOuter = styled.div`
	width: 100%;
	border-top: 1px solid #27303914;
	margin-top: 40px;
`;

const StyledWrapperInner = styled.div`
	width: 100%;
	margin-top: 80px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 15px;
	@media (max-width: 700px) {
		flex-direction: column-reverse;
	}
`;
const StyledFooterContentBox = styled.div`
	width: 30%;
	height: auto;

	&:first-of-type {
		display: flex;
		justify-content: center;
		align-items: center;
		@media (max-width:700px){
			padding:0;
		}
	}
	img {
		width: auto;
		height: 80%;
	}
	&.hours {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 700px) {
		width: 100%;
		margin-bottom: 40px;
		padding: 15px;
		
	}
`;

const StyledCopyrights = styled.div`
	width: 100%;
	height: 50px;
	padding-top: 10px;
	background-color: gray;
	color: ${theme.themeColor};
	text-align: center;
`;
const StyledWrapperContacts = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 20px;

	@media (max-width: 700px) {
		flex-direction: column;
	}
`;
const StyledContactBox = styled.div`
	width: 30%;
	margin-right: 30px;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	@media (max-width: 700px) {
		width: 80%;
		margin-left: 35px;
		margin-bottom: 20px;
		justify-content: left;
	}
`;
const iconStyles = {
	fontSize: '2.5rem',
	color: `${theme.themeColor}`,
	marginRight: '10px',
};
const StyledContactLink = styled.a`
	margin-left: 10px;
	font-size: 1.6rem;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		color: ${theme.themeColor};
	}
`;
const Footer = () => {
	return (
		<StyledWrapperOuter >
			<Container>
				<StyledWrapperInner>
					<StyledFooterContentBox>
						<Logotest ratio="3"/>
					</StyledFooterContentBox>
					<StyledFooterContentBox>
						<FooterAbout />
					</StyledFooterContentBox>
					<StyledFooterContentBox className='hours'>
						<FootersHours />
						<PhoneBtn />
					</StyledFooterContentBox>
				</StyledWrapperInner>
				<StyledWrapperContacts id='kontakt'>
					<StyledContactBox>
						<FiHome style={iconStyles} />
						<StyledContactLink 
						href="https://www.google.com/maps/place/Bukowa+3,+56-416+Twardog%C3%B3ra/@51.3714914,17.4648869,
						17z/data=!3m1!4b1!4m5!3m4!1s0x470fff72ef848c8b:0x58e691ce9fe5f6ed!8m2!3d51.3714881!4d17.4670756"
						target="_blank"
						>
						ul.Bukowa 3 | 56-416 Twardogóra
						</StyledContactLink>
						
					</StyledContactBox>
					<StyledContactBox>
						<GiVibratingSmartphone style={iconStyles} />
						<StyledContactLink href='tel:0048665653651' target="_blank">
						665 653 651
						</StyledContactLink>
					</StyledContactBox>
					<StyledContactBox>
						<RiMessengerLine style={iconStyles} />
						<StyledContactLink href='https://www.facebook.com/BeautyLash.JustynaProcajlo' target="_blank">
							@BeautyLashByJustynaProcajło
						</StyledContactLink>
					</StyledContactBox>
				</StyledWrapperContacts>
			</Container>
			<StyledCopyrights>
				Beauty Lash by Jaustyna Procajło | 2022
			</StyledCopyrights>
		</StyledWrapperOuter>
	);
};

export default Footer;
