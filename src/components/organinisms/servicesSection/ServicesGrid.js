import React from 'react';
import styled from 'styled-components';
import {services} from '../../../constants/Services.js';
import GridItem from '../../molecules/GridItem.js';


const StyledWrapper =styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(280px, 1fr));
grid-gap: 30px;
@media (max-width: 700px){
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));


}
`;


const ServicesGrid = () => {
    return (
        <StyledWrapper>
{services.map(item=>(
    <GridItem 
    image={item.servicePhoto}
    serviceName={item.serviceName}
    excerpt={item.serviceExcerpt}
    id={item.id}
    key={item.id}
    />
))}
        </StyledWrapper>
    )
};

export default ServicesGrid
