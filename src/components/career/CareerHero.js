import React from 'react'
import styled from 'styled-components'
import { Container } from '../../container/Constraint'
import { dummyButton } from '../../styles/Button'
import { grabboColors } from '../../styles/ColorStyles'
import { headerText, bodyText } from '../../styles/TextStyles'
import {FiArrowRight} from 'react-icons/fi'
const CareerHero = ({goTo}) => {


    return (
        <Body>

        <BodyContainer>
        <Cover>
        
        <Title>Careers</Title>
        <Text>The responsibility of having the best in our team. We Are Always 
Looking To Recruit Top Personnels</Text>
        <Button onClick={goTo} >View All Jobs <Icon/></Button>
        </Cover>
        
        </BodyContainer>

                </Body>
    )
}


const Body = styled.div`
min-height: 400px;
width: 100%;
padding: 10px 24px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${grabboColors.white};
@media only screen and (max-width:660px){
    min-height: 300px;

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
max-width: 621px;
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

const Button = styled(dummyButton)`
margin: 0;

`
const Text = styled(bodyText)`
margin: 24px 0 40px 0;
text-align: center;
color:  ${grabboColors.grey};
`

const Icon= styled(FiArrowRight)`
color:  ${grabboColors.white};
transition: 0.4s ease-in;
margin: 0 0 0 8px;
width: 24px;
height: 24px;
${Button}:hover & {
    transition: 0.4s ease-in;
    color:  ${grabboColors.primary};
}
`
export default CareerHero
