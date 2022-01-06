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
const StyledStarInfo = styled.div`
	font-size: 1.2rem;
	letter-spacing: 1px;
	line-height: 1.8rem;
	text-align: center;
    @media (max-width:700px){
        margin-top: 10px;
	font-size: 1rem;

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
            <StyledStarInfo>
					* Ceny usług i czas ich wykonania mają charakter poglądowy i w 
                    rzeczywistości mogą różnić się od cen podanych w cenniku ze
					względu na indywidualny charakter zabiegu.
				</StyledStarInfo>
            
        </StyledWrapper>
    )
}

export default ServicesTable
