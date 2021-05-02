
import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { smallText, tinyHeader } from '../../styles/TextStyles'
import {BsCheck} from 'react-icons/bs'
const AboutTextList = ({top, bottom}) => {
    return (
        <Body>
            <Iconwrap>
                <Iconcover><Icon/></Iconcover>
            </Iconwrap>
            <Text>
<Top>{top}</Top>
<Bottom>{bottom}</Bottom>
            </Text>
        </Body>
    )
}

const Body = styled.div`
min-height: 40px;
max-width: 400px;
margin: 16px 0;
display: grid;
width: 100%;
grid-template-columns: 40px auto;
grid-gap: 24px;
height: 100%;
@media only screen and (max-width: 750px){
    grid-template-columns: 32px auto;
    margin: 8px 0;
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
`
const Top = styled(tinyHeader)`
margin: 0;
width:100%;
color: ${grabboColors.black};
`
const Bottom = styled(smallText)`
margin: 16px 0;
width:100%;
color: ${grabboColors.grey};
`

export default AboutTextList
