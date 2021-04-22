import React from 'react'
import styled from 'styled-components'
import { Container, Photo} from '../container/Constraint'
import { mainButton } from '../styles/Button'
import { LargeText, bodyText } from '../styles/TextStyles'
const NotFound = () => {
    return (
        <Body>

        <BodyContainer>

            <Image>
                <Img src="https://res.cloudinary.com/drfdvwyob/image/upload/v1618789895/Rectangle_4_aang9l.png" alt="Grabbo fertility clinic image" />
            </Image>
            <Title>404 </Title>
            <Text>Oh no!! Somethings don't just go as planned.</Text>
            <Home to='/'>Return Home</Home>
        </BodyContainer>
    </Body>
    )
}

const Body = styled.div`
min-height: 800px;
width: 100%;
padding: 10px 24px;
margin: 40px 0;
@media only screen and (max-width:660px){
    min-height: 500px;

}
`
const BodyContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Image = styled.div`
height: 400px;
max-width: 500px;
width: 100%;
margin: 0;
@media only screen and (max-width:660px){
    min-height: 300px;

}
`
const Img = styled(Photo)`
width: 100%;
height: 100%;
`
const Title = styled(LargeText)`
margin: 24px 0 0 0;
`
const Text = styled(bodyText)`
margin: 24px 0 40px 0;
text-align: center;
`
const Home = styled(mainButton)`
margin: 0;
`
export default NotFound
