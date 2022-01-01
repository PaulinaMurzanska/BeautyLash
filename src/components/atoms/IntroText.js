import React from 'react';
import styled from 'styled-components';

const StyledWrapper=styled.div`
padding:0 80px;
text-align: center;
margin-bottom: 30px;
@media (max-width:700px){
    padding: 0 ;
}
`;

const StyledParagraph=styled.p`
font-size: 1.8rem;
letter-spacing: 1px;
line-height: 2.5rem;
`;

const IntroText = ({text}) => {
    return (
        <StyledWrapper>
            <StyledParagraph>
                {text}
            </StyledParagraph>
            
        </StyledWrapper>
    )
}

export default IntroText
