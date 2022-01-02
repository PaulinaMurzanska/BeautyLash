import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {theme} from '../../themes/ProjectTheme.js';

const StyledGridItemWrapper=styled.div`
box-shadow:${theme.boxShadow};
height: 400px;
border: 1px solid ${theme.themeColor};

border-radius: 4px;
padding: 15px;
@media (max-width:700px){
    height: 250px;
}
`;

const StyledPhotoWrap=styled.div`
background-image:url("${({image})=>image}");
background-position: center;
background-size: cover;
width: 100%;
height: 100%;
position: relative;
border-radius: 4px;

&:after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.349);
    border-radius: 4px;
}

`;

const StyledTextOverlay=styled.div`
width: 100%;
height: 50px;
background-color:white;
position: absolute;
bottom:0;
left: 0;
text-align: center;
transition: .3s ease-in-out;
z-index: 5;

&:hover{
    height: 120px;
    transition: .3s ease-in-out;

    p{
        
        opacity: 1;
        transition: .9s ease-in-out;
        
    }
}
`;

const StyledLink = styled(Link)`
 text-decoration: none;
 cursor: pointer;

`;

const StyledSectionTitle = styled.h2`
	font-size:2rem;
	color: ${theme.fontColorHeaders};
	font-weight: 400;
	letter-spacing: 1px;
    margin-top:10px;
    &:hover{
     color: ${theme.themeColor};
 }

`;
const StyledExcerpt = styled.p`
	font-size:1.5rem;
	color: ${theme.fontColorHeaders};
	font-weight: 300;
	letter-spacing: 1px;
    opacity: 0;
    margin-top:15px;

    
`;

const GridItem = ({image, serviceName, excerpt, id}) => {
    const customPath = `uslugi/:${id}`
    return (
        <StyledGridItemWrapper>
            <StyledPhotoWrap image={image}>
            <StyledTextOverlay>
            <StyledLink to={customPath}>
            <StyledSectionTitle>{serviceName}</StyledSectionTitle>
            </StyledLink>
                <StyledExcerpt>{excerpt}</StyledExcerpt>
            </StyledTextOverlay>
            </StyledPhotoWrap>
        </StyledGridItemWrapper>
    )
}

export default GridItem
