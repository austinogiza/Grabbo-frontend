import React from 'react'
import styled from 'styled-components'
import { LargeContainer, Photo } from '../../container/Constraint'
import { headerText } from '../../styles/TextStyles'
import AboutDoct from './AboutDoct'

const Standard = () => {
    return (
       <Body>

<Left>
    <Image src="https://res.cloudinary.com/drfdvwyob/image/upload/v1619478166/grabbo_hkdcsr.jpg" alt="grabbo "/>
</Left>
<Right>
   <Top>
       <Toptext>We’re Setting The New Standards In Health Sector</Toptext>
   </Top>
   <Bottom>
       <AboutDoct top="Modern Technology" bottom="World class, state of the art facilities" icon="https://res.cloudinary.com/drfdvwyob/image/upload/v1619479796/stethoscope_1_ia5ri3.svg"/>
       <AboutDoct top="Certified Doctors" bottom="Best the of the best when it comes 
to medical personnels" icon="https://res.cloudinary.com/drfdvwyob/image/upload/v1619479796/doctors_laboratory_coat_1_nh4gad.svg"/>
       <AboutDoct top="Success Of Treatment" bottom="We always deliver" icon="https://res.cloudinary.com/drfdvwyob/image/upload/v1619479796/trophy_1_ewmp0y.svg"/>
   </Bottom>
</Right>
       </Body>
    )
}

const Body = styled(LargeContainer)`
display: grid;
width:100%;
grid-template-columns: repeat(2,1fr);
grid-gap: 100px;
min-height: 500px;
margin: 40px auto;
@media only screen and (max-width: 750px){
    grid-template-columns: repeat(1,1fr);
grid-gap: 40px;  
}
`

const Left = styled.div`
width: 100%;
min-height: 500px;
@media only screen and (max-width: 750px){
    min-height: 300px;
}
`
const Image = styled(Photo)`

`
const Right = styled.div`
width:100%;
`
const Top = styled.div`
min-height: 50px;

width:100%;
margin: 0;

`
const Toptext = styled(headerText)`

`
const Bottom = styled.div`
margin: 0;
display: flex;
flex-direction: column;
width:100%;
min-height: 306px;
margin: 16px 0;
`

export default Standard
