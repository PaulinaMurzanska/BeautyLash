import React from 'react';
import PricelistTable from '../components/molecules/pricelistTable/PricelistTable';
import Container from "../components/atoms/containers/Container.js"
import SectionHeader from '../components/molecules/SectionHeader';

const Pricelist = () => {
    return (
        <Container>
            <SectionHeader title="Poglądowy cennik usług"/>
            <PricelistTable/>
        </Container>
    )
}

export default Pricelist
