import styled from 'styled-components';
import React from 'react';
import { theme } from '../../themes/ProjectTheme';

const StyledTitle = styled.h2`
	font-size: 3rem;
	color: ${theme.fontColorHeaders};
	font-weight: 400;
	letter-spacing: 1px;
    @media (max-width: 700px) {
	font-size: 2.5rem;
		
	}
`;
const StyledSectionTitle = ({title}) => {
    return (
        <StyledTitle>
            {title} 
        </StyledTitle>
    )
}

export default StyledSectionTitle

