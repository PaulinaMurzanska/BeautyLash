import React from 'react';
import styled from 'styled-components';
import ServiceItem from './ServiceItem';

const StyledWrapper=styled.div`
margin: auto;
height: auto;
@media (max-width:700px){
    padding: 10px;


    }
`;


const ServicesTable = ({details}) => {
    return (
        <StyledWrapper>
            <table style={{width:"100%"}}>
                <tbody>
                    <tr>
                        <td>
                  
                    {
                        details.map(item=>(
                            <ServiceItem
                            serviceName={item.name}
                            price={item.price} 
                            duration={item.duration}
                            key={item.name}
                            />
                        ))
                    }
                  </td>
                  </tr>
                </tbody>
            </table>
            
        </StyledWrapper>
    )
}

export default ServicesTable
