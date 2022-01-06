import React from 'react';
import styled from 'styled-components';


const StyledWrapper =styled.div`
display: block;
margin: 40px auto;
@media (max-width: 700px) {
		padding: 10px;
	}

`;
const StyledParagraph = styled.p`
	font-size: 1.6rem;
	line-height: 2rem;
	margin-bottom: 15px;
    @media (max-width: 700px) {
        font-size: 1.4rem;
	}
`;
const ServiceDescription = ({descriptions}) => {
    return (
        <StyledWrapper>
       {descriptions.map((item,index)=>(
           <StyledParagraph key={index}>
               {item}
           </StyledParagraph>
       ))}
        </StyledWrapper>
    )
}

export default ServiceDescription
