import React, { useState } from 'react';
import styled from 'styled-components';
import { mainMenuList } from '../../constants/MainMenuList';
import TopMenuItem from '../atoms/menuItems/TopMenuItem';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { theme } from '../../themes/ProjectTheme';

const StyledWrapper = styled.div`
	width: 100%;
	min-height: 30px;
	display: flex;
	justify-content: flex-end;
	position: relative;
`;
const StyledlistWrapper = styled.ul`
	width: 100%;
	height: auto;
	list-style-type: none;
	display: flex;
	justify-content: flex-end;
	background-color: white;
	@media (max-width: 700px) {
		flex-direction: column;
		box-shadow: ${theme.boxShadow};
		position: absolute;
		top: 0;
		right: 0;
		transform: translate3d(0, -150vh, 0);
		transition: transform 0.5s ease-in-out;

		&.menu-is-dropped {
			transform: translate3d(0, 50px, 0);
			transition: transform 0.5s cubic-bezier(0, 0.52, 0, 1);
		}
	}
`;
const StyledBarsWrapper = styled.div`
	font-size: 1.5rem;
	display: none;
	position: absolute;
	top: 0;
	right: 15px;
	@media (max-width: 700px) {
		display: block;
		&.menu-is-dropped {
			display: none;
		}
	}
`;
const StyledCrossWrapper = styled.div`
	font-size: 1.5rem;
	display: none;
	position: absolute;
	top: 0;
	right: 15px;
	@media (max-width: 700px) {
		display: none;
		&.menu-is-dropped {
			display: block;
		}
	}
`;

const MenuBlock = () => {
	const [menuIsDropped, setMenuIsDropped] = useState(false);

	return (
		<StyledWrapper>
			<StyledlistWrapper
				className={menuIsDropped ? 'menu-is-dropped' : null}
			>
				{mainMenuList.map((item) => (
					<TopMenuItem
						item={item.name}
						key={item.name}
						path={item.path}
						onClick={() => setMenuIsDropped(false)}
					/>
				))}
			</StyledlistWrapper>
			<StyledBarsWrapper
				className={menuIsDropped ? 'menu-is-dropped' : null}
				onClick={() => setMenuIsDropped(true)}
			>
				<FaBars />
			</StyledBarsWrapper>
			<StyledCrossWrapper
				className={menuIsDropped ? 'menu-is-dropped' : null}
				onClick={() => setMenuIsDropped(false)}
			>
				<GrClose />
			</StyledCrossWrapper>
		</StyledWrapper>
	);
};

export default MenuBlock;
