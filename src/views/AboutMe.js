import React from 'react';
import styled from 'styled-components';
import Container from '../components/atoms/containers/Container';
import { theme } from '../themes/ProjectTheme';
import justyna from '../assets//images/justyna/justyna_profile.jpg';
import SectionHeader from '../components/molecules/SectionHeader';

const StyledAboutText = styled.p`
	font-size: 1.5rem;
	margin-bottom: 10px;
`;
const StyledWrapper = styled.div`
	display: flex;
	margin-top: 50px;
	flex-direction: row;
	flex-wrap: wrap;
	@media (max-width: 700px) {
		flex-direction: column-reverse;
		align-items: center;
		margin-top: 15px;
	}
`;
const StyledPhotoWrap = styled.div`
	width: 250px;
	height: 250px;
	border: 1px solid ${theme.themeColor};
	padding: 5px;
	border-radius: 4px;
	img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 700px) {
		width: 300px;
		height: 300px;
	}
`;

const StyledAbout = styled.div`
	padding: 0 30px;
	width: 70%;
	@media (max-width: 700px) {
		width: 100%;
	}
`;

const StyledOuterWrapper = styled.div`
	padding: 80px 0;
`;

const AboutMe = () => {
	return (
		<StyledOuterWrapper>
			<Container>
				<SectionHeader title='Witaj' />
				<StyledWrapper>
					<StyledPhotoWrap>
						<img src={justyna} alt='justyna' />
					</StyledPhotoWrap>

					<StyledAbout>
						<StyledAboutText>
							Bardzo mi miło, że odwiedzasz stronę mojego studio.
						</StyledAboutText>
						<StyledAboutText>
							{' '}
							Mam na imię Justyna, stylizacją brwi i rzęs zajmuję
							się profesjonalnie od 5 lat, ale od zawsze
							interesowałam się tematami związanymi z wizażem i
							stylizacją.
						</StyledAboutText>
						<StyledAboutText>
							{' '}
							Swoje umiejętności zdobyłam kończąc eliatarny kurs
							stylizacji TUTAJ TYTUŁ KURSU.
						</StyledAboutText>
						<StyledAboutText>
							{' '}
							W moim salonie oferuję nie tylko usługi związane z
							oprawą oczu, ale wykonuję również inne zabiegi
							pielęgnacyjne twarzy.
						</StyledAboutText>
						<StyledAboutText>
							Współpracuję z najlepszymi markami kosmetycznymi,
							dzięki czemu mam pewność, że moje klientki są pod
							najlpeszą opieką.
						</StyledAboutText>

						<StyledAboutText>
							Zapraszam Cię do mojego salonu.
						</StyledAboutText>
					</StyledAbout>
				</StyledWrapper>
			</Container>
		</StyledOuterWrapper>
	);
};

export default AboutMe;
