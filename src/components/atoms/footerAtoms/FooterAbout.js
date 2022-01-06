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

const FooterAbout = () => {
	return (
		<>
			<StyledAbout>O mnie</StyledAbout>
			<StyledAboutText>
				Stylizacją brwi i rzęs zajmuję się od ponad 5 lat. Wykonując
				zabiegi każdej klientce oferuję indywidualne podejście
				dopasowane do jej indywidualnych potrzeb.
			</StyledAboutText>
			<StyledAboutText>
				W swojej pracy bazuję na najwyższej jakości produktach,
				zapewniając moim klienkom bezpieczeństwo i trwałość wykonanych
				zabiegów.
			</StyledAboutText>
			<StyledAboutText>
				Zapraszam do obejrzenia galerii zdjęć wykonanych przez moje
				studio stylizacji.
			</StyledAboutText>
		</>
	);
};

export default FooterAbout;
