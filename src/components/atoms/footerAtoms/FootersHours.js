import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../themes/ProjectTheme';

const StyledAbout = styled.h3`
	font-size: 2.5rem;
	border-bottom: 1px solid ${theme.themeColor};
	margin-bottom: 15px;
`;
const StyledAboutText = styled.p`
	font-size: 1.5rem;
	margin-bottom: 10px;
`;

const FootersHours = () => {
	return (
		<>
			<StyledAbout>Godziny pracy</StyledAbout>
			<StyledAboutText>
				Godziny wykonania zabiegu ze względu na zróżnicowany czas trwania
				poszczególnych usług, ustalam z każdą klientką
				indywidualnie. Aby umówić się na zabieg, zadzwoń, a na
				pewno uda nam się ustalić dogodny dla Ciebie termin.
			</StyledAboutText>
		</>
	);
};

export default FootersHours;
