import styled from 'styled-components';
import React from 'react';
import { theme } from '../../themes/ProjectTheme';

const StyledTitle = styled.h2`
	font-size: 3.6rem;
	color: ${theme.fontColorHeaders};
	font-weight: 400;
	letter-spacing: 1px;
`;
const StyledSectionTitle = ({title}) => {
    return (
        <StyledTitle>
            {title} 
        </StyledTitle>
    )
}

export default StyledSectionTitle

