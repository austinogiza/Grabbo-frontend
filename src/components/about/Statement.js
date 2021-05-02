import React from 'react'
import styled from 'styled-components'
import { LargeContainer } from '../../container/Constraint'
import { grabboColors } from '../../styles/ColorStyles'
import { bodyText, headerText } from '../../styles/TextStyles'
import AboutList from './AboutList'

const Statement = () => {
    return (
       <Body>

           <Wrapper>
               <Left>
       <Lefttext>Statement of Values</Lefttext>
               </Left>
               <Right>

                   <Top><Toptext>GFC key values are created by Grabbo Fertility Clinic employees to establish a shared understanding of how we relate to our patients and to the community.
Together, these seven values form the basis of our what we do,who we are strategic goals and guide our actions under our code of ethical conduct: </Toptext></Top>
<Bottom>
    <AboutList/>
</Bottom>
               </Right>
           </Wrapper>
       </Body>
    )
}
const Body = styled(LargeContainer)`
min-height: 500px;
margin: 40px auto;
@media only screen and (max-width: 750px){
 
 margin: 8px auto;
}
`
const Wrapper = styled.div`
display: grid;
width: 100%;
grid-template-columns: 300px auto;
grid-gap: 24px;
height: 100%;
@media only screen and (max-width: 750px){
    grid-template-columns: repeat(1,1fr);
grid-gap: 24px;  
}
`
const Left = styled.div`
width: 100%;
margin: 0;
`
const Lefttext = styled(headerText)`

`
const Right = styled.div`
width: 100%;
margin: 16px 0;
display: flex;
flex-direction: column;
@media only screen and (max-width: 750px){
 
    margin: 8px 0;
}
`
const Top = styled.div`
width: 100%;
margin: 0;
`
const Toptext = styled(bodyText)`
color: ${grabboColors.grey};
`
const Bottom = styled.div`
margin: 64px 0  0 0;

@media only screen and (max-width: 750px){
    margin: 32px 0  0 0;
}

`
export default Statement
