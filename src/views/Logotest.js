import React from 'react';
import Container from "../components/atoms/containers/Container.js"
import styled from 'styled-components';
import { theme } from '../themes/ProjectTheme.js';



const StyledFrame =styled.div`
width:calc(${({ratio})=>ratio} * 100px);
height: calc(${({ratio})=>ratio} * 100px);
position: relative;
margin:0 auto;

`;
const StyledOuterBox = styled.div`
width: 55%;
height: 55%;
border: calc(${({ratio})=>ratio} * 2px) solid ${theme.themeColor};
position:absolute;
top:50%;
left: 48% ;
transform: translate(-50%, -50%) rotate(-45deg);

`;
const StyledInnerBox = styled.div`
width:calc(100% + 10px);
height:calc(100% + 10px);
border: calc(${({ratio})=>ratio} * 1px)  solid ${theme.themeColor};
position:absolute;
top:5%;
left:5%;

`;
const StyledLetters = styled.div`
position:absolute;
top:50%;
left:52%;
transform: translate(-50%, -50%);
width: 60%;
height: 30%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const StyledP1= styled.p`
font-size:calc(${({ratio})=>ratio} * 7.5px);
`;
const StyledP2= styled.p`
font-size:calc(${({ratio})=>ratio} * 5px);
`;

const Logotest = ({ratio}) => {
    return (
        <Container>
            <StyledFrame ratio={ratio}>
                <StyledOuterBox ratio={ratio}>
                    <StyledInnerBox ratio={ratio}/>
                </StyledOuterBox>
                <StyledLetters ratio={ratio}>
                    <StyledP1 ratio={ratio}>BeautyLash by</StyledP1>
                    <StyledP2 ratio={ratio}>Justyna Procajło</StyledP2>
                </StyledLetters>
            </StyledFrame>
  
         
        </Container>
    )
}

export default Logotest
