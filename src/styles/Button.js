import { Link } from "react-router-dom";
import styled from "styled-components";
import { grabboColors } from "./ColorStyles";

export const mainButton = styled(Link)`
height: 48px;
max-width: 180px;
width:100%;
background: ${grabboColors.primary};
color: ${grabboColors.white};
display: flex;
justify-content: center;
align-items: center;
outline: none;
border: none;
border-radius: 5px;
font-family: "Gilroy Medium";
font-size: 17px;
font-style: normal;
font-weight: 400;
cursor: pointer;
line-height: 1;
text-align: center;
:hover{
    border: 1px solid  ${grabboColors.primary};
    background: ${grabboColors.white};
    transition: 0.4s ease-in;
    color: ${grabboColors.primary};
}
@media only screen and (max-width: 650px){
    font-size: 16px;
}
`

export const GhostButton = styled(Link)`
height: 48px;
max-width: 180px;
border-radius: 5px;
width:100%;
background: ${grabboColors.white};
color: ${grabboColors.primary};
display: flex;
justify-content: center;
align-items: center;
outline: none;
cursor: pointer;
border: 1px solid  ${grabboColors.primary};
font-family: "Gilroy Medium";
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 1;
text-align: center;
transition: 0.4s ease-in;
:hover{
    border: 1px solid  ${grabboColors.primary};
    background: ${grabboColors.dark};
    transition: 0.4s ease-in;
    color: ${grabboColors.white};
}
@media only screen and (max-width: 650px){
    font-size: 16px;
}
`

export const dummyButton = styled.button`
height: 48px;
max-width: 180px;
border-radius: 5px;
width:100%;
cursor: pointer;
background: ${grabboColors.primary};
color: ${grabboColors.white};
display: flex;
justify-content: center;
align-items: center;
outline: none;
border: none;
font-family: "Gilroy Medium";
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 1;
text-align: center;
:hover{
    border: 1px solid  ${grabboColors.primary};
    background: ${grabboColors.white};
    transition: 0.4s ease-in;
    color: ${grabboColors.primary};
}
@media only screen and (max-width: 650px){
    font-size: 16px;
}
`

export const formButton = styled.button`
height: 48px;
max-width: 150px;
border-radius: 5px;
width: 100%;
background: ${grabboColors.primary};
color: ${grabboColors.white};
display: flex;
justify-content: center;
align-items: center;
outline: none;
border: none;
font-family: "Gilroy Medium";
font-size: 17px;
font-style: normal;
font-weight: 400;
cursor: pointer;
line-height: 1;
text-align: center;
:hover{
    border: 1px solid  ${grabboColors.primary};
    background: ${grabboColors.white};
    transition: 0.4s ease-in;
    color: ${grabboColors.primary};
}
@media only screen and (max-width: 650px){
    font-size: 16px;
}
`