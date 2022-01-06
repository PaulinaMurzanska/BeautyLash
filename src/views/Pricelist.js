import React from 'react';
import styled from 'styled-components';
import PricelistTable from '../components/molecules/pricelistTable/PricelistTable';
import ServicesTable from '../components/molecules/serviceTable/ServicesTable';
import { multiServices } from '../constants/ServicesDetails';
import Container from "../components/atoms/containers/Container.js"

const Pricelist = () => {
    return (
        <Container>
            <PricelistTable/>
            
        </Container>
    )
}

export default Pricelist
