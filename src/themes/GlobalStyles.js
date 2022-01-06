import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Inter:wght@100;200;300;400;500;600;700;800&family=PT+Mono&family=Poiret+One&family=Readex+Pro:wght@200;300;400;500&display=swap');
@font-face {
    font-family:'DINPro-Regular', sans-serif ;
    src: url(${'../fonts/DINPro-Regular_13937.ttf'});
}


*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html{
    font-size: 62.5%;
    font-family:'DINPro-Regular', sans-serif ;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    width: 100vw;

}
body{
    font-size: 1.6rem;
    background-color:#fff;
    color: rgba(39, 48, 57, 0.7);
    margin: 0;
    padding: 0;
    width: 100%;

}
h1,h2,h3,h4,h5,h6,ul,li,p,span, a{
    margin: 0;
    padding: 0;
    color: rgba(39, 48, 57, 0.7);

`;
export default GlobalStyles;