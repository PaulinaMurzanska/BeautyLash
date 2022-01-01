import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
width: 1170px;
 max-width: 1170px;
 margin: 0 auto;
 @media (max-width:11700px){
     width: 90%;
 }
 @media (max-width:360px){
     width: 100%;
     padding: 0 5px;
 }
`;

const Container = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
};



export default Container
