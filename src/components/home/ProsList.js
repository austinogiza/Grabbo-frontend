import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { tinyHeader } from '../../styles/TextStyles'
import {BsCheck} from 'react-icons/bs'
const ProsList = ({text, bottom}) => {
    return (
        <Body>
            <Iconwrap>
                <Iconcover><Icon/></Iconcover>
            </Iconwrap>
            <Text>
<Top>{text}</Top>
            </Text>
        </Body>
    )
}

const Body = styled.div`
min-height: 40px;
max-width: 250px;
margin: 16px auto;
display: flex;
width: 100%;
flex-direction: column;
height: 100%;
align-items: flex-start;
@media only screen and (max-width: 450px){
align-items: center;
}
`
const Iconwrap = styled.div`
height: 40px;
width: 40px;
@media only screen and (max-width: 750px){
    height: 32px;
width: 32px;
}
`
const Iconcover = styled.div`
height: 100%;
width: 100%;
background:  ${grabboColors.light};
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const Icon = styled(BsCheck)`
height: 24px;
width: 24px;
`
const Text = styled.div`
display: flex;
flex-direction: column;
width:100%;
align-items: flex-start;
margin: 24px 0;
@media only screen and (max-width: 450px){
align-items: center;
text-align: center;
}
`
const Top = styled(tinyHeader)`
margin: 0;
width:100%;
text-align: left;
color: ${grabboColors.black};
@media only screen and (max-width: 450px){

text-align: center;
}
`


export default ProsList
