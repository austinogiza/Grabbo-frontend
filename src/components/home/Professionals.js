import React from 'react'
import styled from 'styled-components'
import { headerText } from '../../styles/TextStyles'
import ProfessionalCard from './ProfessionalCard'



const Professionals = () => {


    return (
       <Body>

           <Title>
               <Header>Meet Our Health Professionals</Header>
              
           </Title>
           <Pros>
<ProsGrid>
<ProfessionalCard img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619969251/dr_kate_yyfwnt.jpg" name="DR. KATE O. ONOJA (MBBS,FMCOG, FWACS)" description="Chief Medical Director"/>
<ProfessionalCard img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619969251/dr_kate_yyfwnt.jpg" name="DR. KATE O. ONOJA (MBBS,FMCOG, FWACS)" description="Chief Medical Director"/>
<ProfessionalCard img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619969251/dr_kate_yyfwnt.jpg" name="DR. KATE O. ONOJA (MBBS,FMCOG, FWACS)" description="Chief Medical Director"/>

<ProfessionalCard img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619969251/dr_kate_yyfwnt.jpg" name="DR. KATE O. ONOJA (MBBS,FMCOG, FWACS)" description="Chief Medical Director"/>
<ProfessionalCard img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619969251/dr_kate_yyfwnt.jpg" name="DR. KATE O. ONOJA (MBBS,FMCOG, FWACS)" description="Chief Medical Director"/>

<ProfessionalCard img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619969251/dr_kate_yyfwnt.jpg" name="DR. KATE O. ONOJA (MBBS,FMCOG, FWACS)" description="Chief Medical Director"/>


</ProsGrid>

           </Pros>
       </Body>
    )
}

const Body = styled.div`
min-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin: 40px 0;
`
const Title = styled.div`
min-height: 70px;
display: flex;
max-width: 700px;
margin: 0 auto;
align-items: center;
flex-direction: column;
width: 100%;
text-align: center;
`
const Header = styled(headerText)`
width: 100%;
margin: 0;

`

const Pros = styled.div`
width: 100%;
margin: 32px 0;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;

`
const ProsGrid = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 24px;
place-items: center;
@media only screen and (max-width: 850px){
    grid-template-columns: repeat(2,1fr);
grid-gap: 16px;
place-items: center;
}
@media only screen and (max-width: 450px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 16px;
}
`
export default Professionals
