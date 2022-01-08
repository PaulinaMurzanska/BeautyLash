import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../themes/ProjectTheme';
import { FiPhoneCall } from 'react-icons/fi';

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
    &:hover{
        background-color: white;
        border:1px solid ${theme.themeColor};
        transform: scale(1.2);
        a{
            color:${theme.themeColor};
        }
    }
`;
const StyledContactLink = styled.a`
color:white;
`;
const iconStyle = {
	position: 'absolute',
	top: '55%',
	left: '45%',
	transform: 'translate(-50% ,-50%)',
    fontSize: "4rem",
	textDecoration: "none",
 
};

const PhoneBtn = () => {
    return (
        <StyledPhoneBox>
        <StyledContactLink href='tel:004866553651'>
            <FiPhoneCall style={iconStyle} />
        </StyledContactLink>
    </StyledPhoneBox>
    )
}

export default PhoneBtn
