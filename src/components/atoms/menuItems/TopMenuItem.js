import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../themes/ProjectTheme';

const StyledMenuItem = styled.li`
	width: 120px;
	margin-right: 2px;
	text-align: center;
	cursor: pointer;
	padding: 10px 0;
	border-radius: 4px;

	&:last-of-type {
		margin-right: 0;
	}
	&:hover {
		background-color: ${theme.themeColorLighter};
		color: white;
	}
	&.active {
		background-color: ${theme.themeColorLighter};
		color: white;
	}
	@media (max-width: 700px) {
		border-bottom: 1px solid ${theme.themeColor};
		padding: 15px;
		width: 100%;
	}
`;
const StyledNavLink = styled.a`
	font-size: 1.5rem;
	text-transform: uppercase;
	text-decoration: none;
	@media (max-width: 700px) {
		padding: 15px 0;
		width: 100%;
	}
`;

const TopMenuItem = ({ item,path }) => {
	return (
		<StyledNavLink href={path}>
		<StyledMenuItem>
		
				{item}
		</StyledMenuItem>
		</StyledNavLink>
	);
};

export default TopMenuItem;
