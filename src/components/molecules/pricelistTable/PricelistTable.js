import React from 'react';
import styled from 'styled-components';
import { multiServices } from '../../../constants/ServicesDetails.js';
import { theme } from '../../../themes/ProjectTheme.js';
import PricelistItem from './pricelistItem.js';



const StyledWrapper=styled.div`
height: auto;
width: 80%;
margin:0 auto;
@media (max-width:700px){
    padding: 10px;
width: 100%;

    }
`;
const StyledTablehead=styled.thead`
background-color: ${theme.themeColor};
`;
const StyledTableheadItem=styled.th`
font-size: 2rem;
font-weight: normal;
padding:10px;
`;

const PricelistTable = (

) => {
    return (
        <StyledWrapper>
        <table style={{width:"100%"}}>
            <StyledTablehead>
                <tr>
                    <StyledTableheadItem>nazwa usługi</StyledTableheadItem>
                    <StyledTableheadItem>cena</StyledTableheadItem>
                </tr>

            </StyledTablehead>
            <tbody>
                    {
                        multiServices.map(item=>(
                            <PricelistItem
                            key={item.name}
                            name={item.name}
                            price={item.price}
                            id={item.id}
                            />
                            
                        ))
                    }
            </tbody>
        </table>
        
    </StyledWrapper>
    )
}

export default PricelistTable
