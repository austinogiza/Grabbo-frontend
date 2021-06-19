import { createGlobalStyle } from "styled-components";
import Bold from '../fonts/Gilroy-Bold.ttf'
import Regular from '../fonts/Gilroy-Regular.ttf'
import Light from '../fonts/Gilroy-Light.ttf'
import Medium from '../fonts/Gilroy-Medium.ttf'
export const GlobalStyles = createGlobalStyle`
a{
  text-decoration: none;
}

@font-face {
  font-family: "Gilroy Bold";
  src: url(${Bold});
}
@font-face {
  font-family: "Gilroy Medium";
  src: url(${Medium});
}
@font-face {
  font-family: "Gilroy Regular";
  src: url(${Regular});
}
@font-face {
  font-family: "Gilroy Light";
  src: url(${Light});
}

body{
    overflow-x:hidden;
    width: 100%;
    height: 100%;
  
}
html{
  scroll-behavior: smooth;
}
li{
  list-style-type: none;
}

*,*::after,*::before{
margin: 0;
padding: 0;
box-sizing: border-box;

}
html{
  overflow-x: hidden !important;
}
`