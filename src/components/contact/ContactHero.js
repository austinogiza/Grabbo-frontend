
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../container/Constraint'
import { grabboColors } from '../../styles/ColorStyles'
import { headerText } from '../../styles/TextStyles'

const ContactHero = ({goTo}) => {


    return (
        <Body>

        <BodyContainer>
        <Cover>
        
        <Title>Contact Us</Title>

  
        </Cover>
        
        </BodyContainer>

                </Body>
    )
}


const Body = styled.div`
min-height: 300px;
width: 100%;
padding: 10px 24px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${grabboColors.white};
@media only screen and (max-width:660px){
    min-height: 250px;

}
`

const BodyContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Cover = styled.div`
width: 100%;
max-width: 810px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 3;
`
const Title = styled(headerText)`
margin:  0;
text-align: center;
`


export default ContactHero
