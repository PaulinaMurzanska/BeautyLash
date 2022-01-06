import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/containers/Container';
import logo from '../../../assets/images/logo/logolashes.png';
import { theme } from '../../../themes/ProjectTheme';
import { GiVibratingSmartphone } from 'react-icons/gi';
import { SiMaildotru } from 'react-icons/si';
import { FiHome } from 'react-icons/fi';
import FooterAbout from '../../atoms/footerAtoms/FooterAbout';
import FootersHours from '../../atoms/footerAtoms/FootersHours';
import PhoneBtn from '../../atoms/footerAtoms/PhoneBtn';

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
		<StyledWrapperOuter id='kontakt'>
			<Container>
				<StyledWrapperInner>
					<StyledFooterContentBox>
						<img src={logo} alt='logo' />
					</StyledFooterContentBox>
					<StyledFooterContentBox>
						<FooterAbout />
					</StyledFooterContentBox>
					<StyledFooterContentBox className='hours'>
						<FootersHours />
						<PhoneBtn />
					</StyledFooterContentBox>
				</StyledWrapperInner>
				<StyledWrapperContacts>
					<StyledContactBox>
						<FiHome style={iconStyles} />
						ul.Bukowa 4 | Twardogóra
					</StyledContactBox>
					<StyledContactBox>
						<GiVibratingSmartphone style={iconStyles} />
						<StyledContactLink href='tel:0048555666454'>
							555 333 554
						</StyledContactLink>
					</StyledContactBox>
					<StyledContactBox>
						<SiMaildotru style={iconStyles} />
						<StyledContactLink href='mailto:lashes@gmail.com'>
							lashes@gmail.com
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
