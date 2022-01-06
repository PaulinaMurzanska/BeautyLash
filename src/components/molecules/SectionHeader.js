import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/ProjectTheme';
import { AiFillHeart } from 'react-icons/ai';
import StyledSectionTitle from '../atoms/StyledSectionTitle';

const StyledWrapper = styled.div`
	display: block;
	text-align: center;
	margin-bottom: 40px;
`;
const StyledSectionHeader = styled.div`
	display: block;
	text-align: center;
`;

const StyledTitleHeartUnderline = styled.div`
	margin: 15px auto;
	width: 80%;
	height: 30px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
`;
const StyledLine = styled.div`
	height: 1px;
	background-color: ${theme.themeColor};
	width: 300px;
`;
const StyledHeartIcon = styled.div`
	background-color: white;
	font-size: 20px;
	padding: 5px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${theme.themeColor};
	border: 10px solid rgb(39 48 57 / 7%);
`;

const SectionHeader = ({ title }) => {
	return (
		<StyledWrapper>
			<StyledSectionHeader>
				<StyledSectionTitle title={title}/>
				<StyledTitleHeartUnderline>
					<StyledLine />
					<StyledHeartIcon>
						<AiFillHeart />
					</StyledHeartIcon>
					<StyledLine />
				</StyledTitleHeartUnderline>
			</StyledSectionHeader>
		</StyledWrapper>
	);
};

export default SectionHeader;
