import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/containers/Container';
import Logo from '../../atoms/Logo';
import MenuBlock from '../../molecules/MenuBlock';

const StyledWrapperOuter = styled.div`
	width: 100%;
	top: 0;
	left: 0;
	z-index: 999;
	background-color: white;
	box-shadow: 0 0 6px rgb(39 48 57 / 7%);
	position: fixed;

`;
const StyledWrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	position: relative;
`;
const StyledLogoBox = styled.div`
	width: 10%;
`;
const StyledMenuBox = styled.div`
	width: 85%;
`;

const MenuTop = () => {
	return (
		<StyledWrapperOuter>
			<Container>
				<StyledWrapper>
					<StyledLogoBox>
						<Logo />
					</StyledLogoBox>
					<StyledMenuBox>
						<MenuBlock />
					</StyledMenuBox>
				</StyledWrapper>
			</Container>
		</StyledWrapperOuter>
	);
};

export default MenuTop;
