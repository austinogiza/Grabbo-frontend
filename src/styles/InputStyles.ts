import styled from "styled-components";
import { grabboColors } from "./ColorStyles";

export const FormInput = styled.input`
height: 48px;
max-width: 500px;
width: 100%;
border-radius: 5px;
border: 1px solid ${grabboColors.black};
transition: 0.1s ease-out;
outline: none;
padding: 10px 20px;
:focus{
    border: 2px solid ${grabboColors.primary};
}
:active{
    border: 2px solid ${grabboColors.primary};
}
`
export const FormArea = styled.textarea`
height: 367px;
max-width: 500px;
resize: none;
width: 100%;
border-radius: 5px;
padding: 10px 20px;
outline: none;
border: 1px solid ${grabboColors.black};
transition: 0.1s ease-out;
:focus{
    border: 2px solid ${grabboColors.primary};
}
:active{
    border: 2px solid ${grabboColors.primary};
}
`