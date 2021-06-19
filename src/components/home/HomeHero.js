import React from 'react'
import styled from 'styled-components'
import { mainButton } from '../../styles/Button'
import { grabboColors } from '../../styles/ColorStyles'
import { bodyText, headerText } from '../../styles/TextStyles'

const HomeHero = () => {
    return (
     <Body>
<Blue/>
  <Cover>
  <Headerh1>
    Welcome To Grabbo Fertility Clinic
    </Headerh1>
    <Headerp>
    Grabbo Fertility Clinic reiterates the pledge to help all and give hope to those who have lost hope.
We are happy to have you
    </Headerp>
    <Headerbutton>Book Appointment</Headerbutton>
  </Cover>


     </Body>
    )
}

const Body = styled.div`
min-height: 782px;
width: 100%;
background: url('https://res.cloudinary.com/drfdvwyob/image/upload/v1623202302/hero_image_1_la5rko.jpg') no-repeat center center/cover;
justify-content: center;
display: flex;
padding: 10px 24px;
align-items: center;
@media only screen and (max-width: 550px){
    min-height: 482px;

}

position: relative;
`
const Blue = styled.div`
position: absolute;
top: 0;
left:0;
width:100%;
height: 100%;
z-index: 20;
background: rgba(57, 108, 240, 0.2);
`

const Cover = styled.div`
justify-content: center;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
max-width: 770px;
width:100%;
height: 100%;
z-index: 23;
`
const Headerh1 = styled(headerText)`
margin: 8px 0;
text-align: center;
color: ${grabboColors.white};
`
const Headerp = styled(bodyText)`
text-align: center;
color: ${grabboColors.white};
`
const Headerbutton = styled(mainButton)`
margin: 24px 0;

`
export default HomeHero
