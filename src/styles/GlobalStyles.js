import { createGlobalStyle } from "styled-components";
// import Bold from '../fonts/Bold.otf'
// import Regular from '../fonts/Regular.otf'
// import Light from '../fonts/Light.otf'
// import Medium from '../fonts/Medium.otf'
export const GlobalStyles = createGlobalStyle`

${'' /* @font-face {
  font-family: "Usual Bold";
  src: url(${Bold});
}
@font-face {
  font-family: "Usual Medium";
  src: url(${Medium});
}
@font-face {
  font-family: "Usual Regular";
  src: url(${Regular});
}
@font-face {
  font-family: "Usual Light";
  src: url(${Light});
} */}

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

`