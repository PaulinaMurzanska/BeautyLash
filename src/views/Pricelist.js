import React from 'react';
import PricelistTable from '../components/molecules/pricelistTable/PricelistTable';
import Container from "../components/atoms/containers/Container.js"
import SectionHeader from '../components/molecules/SectionHeader';
import styled from 'styled-components';

const StyledOuterWrapper=styled.div`
margin-top: 40px;
`;

const Pricelist = () => {
    return (
        <StyledOuterWrapper>
        <Container>
            <SectionHeader title="Poglądowy cennik usług"/>
            <PricelistTable/>
        </Container>
        </StyledOuterWrapper>
    )
}

export default Pricelist
