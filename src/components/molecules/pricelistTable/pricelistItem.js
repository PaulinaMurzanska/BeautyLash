import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../themes/ProjectTheme';

const StyledTableRow=styled.tr`
height: 60px;
background-color: white;

&:nth-of-type(2n){
    background-color:rgb(248, 245, 245);
}
&:hover{
    transform: scale(1.01);
    transition: .6;
    box-shadow: ${theme.boxShadow};
    color:${theme.themeColor};
    cursor: pointer;
}

`;

const StyledTableTd=styled.td`
padding-left:10px;
font-size: 1.6rem;
@media (max-width:700px){
    font-size: 1.4rem;
}
`;



const PricelistItem = ({name, price, id}) => {

  const history =useNavigate();


    
 const handleClick = ()=>{
     history(`/uslugi/:${id}`);
 }

    return (


        <StyledTableRow onClick={handleClick} >
            <StyledTableTd>{name}</StyledTableTd>
            <StyledTableTd>{price}</StyledTableTd>
        </StyledTableRow>

    )
}

export default PricelistItem
