import styled from "styled-components";

export const smallText = styled.p`
font-family: "Gilroy light";
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 1.5;


@media only screen and (max-width: 650px){

    font-size: 14px;
}
`

export const bodyText = styled.p`
font-family: "Gilroy Light";
font-size: 17px;
font-style: normal;
font-weight: 300;
line-height: 1.5;


@media only screen and (max-width: 650px){

    font-size: 16px;
}
`

export const LargeText = styled.h1`
font-family: "Gilroy Medium";
font-size: 96px;
font-style: normal;
font-weight: 600;
line-height: 1.5;


@media only screen and (max-width: 650px){

    font-size: 50px;
}
`
export const headerText = styled.h1`
font-family: "Gilroy Bold";
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 1.5;
@media only screen and (max-width: 650px){

    font-size: 24px;
}
`


export const mediumHeader = styled.h2`
font-family: "Gilroy Bold";
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 1.5;
@media only screen and (max-width: 650px){

    font-size: 21px;
}
`

export const tinyHeader = styled.h2`
font-family: "Gilroy Bold";
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: 1.5;
@media only screen and (max-width: 650px){

    font-size: 17px;
}
`
