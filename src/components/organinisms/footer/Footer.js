import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/containers/Container';
import logo from '../../../assets/images/lashes/logolashes.png';
import { theme } from '../../../themes/ProjectTheme';
import { FiPhoneCall } from 'react-icons/fi';
import { GiVibratingSmartphone } from 'react-icons/gi';
import { SiMaildotru } from 'react-icons/si';
import { FiHome } from 'react-icons/fi';

const StyledWrapperOuter = styled.div`
	width: 100%;
	border-top: 1px solid #27303914;
	margin-top: 80px; ;
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
	}
`;

const StyledAbout = styled.h3`
	font-size: 2.5rem;
	border-bottom: 1px solid ${theme.themeColor};
	margin-bottom: 15px;
`;
const StyledAboutText = styled.p`
	font-size: 1.5rem;
	margin-bottom: 10px;
`;
const StyledPhoneBox = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: ${theme.themeColor};
	color: white;
	font-size: 40px;
	position: relative;
	align-self: flex-end;
	margin-top: 25px;
	margin-right: 50px;
	cursor: pointer;
	@media (max-width: 700px) {
		margin-right: 100px;
	}
`;
const iconStyle = {
	position: 'absolute',
	top: '55%',
	left: '45%',
	transform: 'translate(-50% ,-50%)',
};
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
						<StyledAbout>O mnie</StyledAbout>
						<StyledAboutText>
							Stylizacją brwi i rzęs zajmuję się od ponad 3 lat.
							Wykonując zabiegi każdej klientce oferuję
							indywidualne podejście dopasowane do jej
							indywidualnych potrzeb.
						</StyledAboutText>
						<StyledAboutText>
							W swojej pracy bazuję na najwyższej jakości
							produktach, zapewniając moim klienkom bezpieczeństwo
							i trwałość wykonanych zabiegów.
						</StyledAboutText>
						<StyledAboutText>
							Zapraszam do obejrzenia galerii zdjęć wykonanych
							przez moje studio stylizacji.
						</StyledAboutText>
					</StyledFooterContentBox>
					<StyledFooterContentBox className='hours'>
						<StyledAbout>Godziny pracy</StyledAbout>
						<StyledAboutText>
							Godziny wykonania zabiegu ustalam z każdą klientką
							indywidualnie, ze względu na zróżnicowany czas
							trwania poszczególnych usług. Aby umówić się na
							zabieg, zadzwoń, a na pewno uda nam się ustalić
							dogodny dla Ciebie termin.
						</StyledAboutText>
						<StyledPhoneBox>
							<FiPhoneCall style={iconStyle} />
						</StyledPhoneBox>
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
