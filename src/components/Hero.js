import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../styles/ColorStyles'
import { headerText, tinyHeaderLight } from '../styles/TextStyles'

const hero = ({img, header, text}) => {
    return (
        <Body img={img}>
<Cover>
<Header>
    {header}
</Header>
<Text>{text}</Text>

</Cover>
<Blue/>
            
        </Body>
    )
}

const Body = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 600px;
justify-content: center;
align-items: center;
background: url(${props => props.img})  no-repeat center center/cover;
position: relative;
padding: 10px 24px;
@media only screen and (max-width: 650px){
    height: 400px;
}
`
const Cover = styled.div`
width: 100%;
height: 100%;
max-width: 698px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
z-index: 42;
text-align: center;
`
const Blue = styled.div`
position: absolute;
z-index: 40;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: rgba(57, 108, 240, 0.3);
`

const Header = styled(headerText)`
margin: 0;
color: ${grabboColors.white};
`
const Text = styled(tinyHeaderLight)`
margin: 24px 0;
color: ${grabboColors.smoke};
`

export default hero
