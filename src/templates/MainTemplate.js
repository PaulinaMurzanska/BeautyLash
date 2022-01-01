import React from 'react';
import GlobalStyles from '../themes/GlobalStyles';


const MainTemplate = ({children}) => {
    return (
        <>
        <GlobalStyles/>
        {children}
        </>
    )
}

export default MainTemplate
