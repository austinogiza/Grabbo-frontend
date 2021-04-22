import React from 'react'
import styled from 'styled-components'
import { Container } from '../container/Constraint'
import { mainButton } from '../styles/Button'
import { grabboColors } from '../styles/ColorStyles'
import { headerText } from '../styles/TextStyles'
import noise from '../assets/noise.png'

const Message = () => {
    return (
        <Body>

<BodyContainer>
<Cover>

<Title>We Provide the highest level of satisfaction care & services to our patients.</Title>
<Button to='/'>Go Home</Button>
</Cover>

</BodyContainer>
<Noise src={noise} alt="Grabbo Noise"/>
        </Body>
    )
}

const Body = styled.div`
min-height: 500px;
width: 100%;
padding: 10px 24px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${grabboColors.light};
@media only screen and (max-width:660px){
    min-height: 400px;

}
`
const Noise = styled.img`
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
z-index: 1;
`
const BodyContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Cover = styled.div`
width: 100%;
max-width: 980px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
z-index: 3;
`
const Title = styled(headerText)`
margin:  40px 0;
text-align: center;
`

const Button = styled(mainButton)`
margin: 0;

`
export default Message
