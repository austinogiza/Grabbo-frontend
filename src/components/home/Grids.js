import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { bodyText, headerText } from '../../styles/TextStyles'

const Grids = () => {
    return (
       <Body>
           <TopLeft>
               <Header>We Help You Stay Healthy</Header>
               <Text>Yearly, we give couples affordable costs for treatment and drugs to aid our goal and their goal</Text>
           </TopLeft>
           <TopRight>
               <Image src="https://res.cloudinary.com/drfdvwyob/image/upload/v1620512182/grid02_cuxg4c.jpg" alt="grabbo image"/>
           </TopRight>
           <BottomLeft>
           <Image src="https://res.cloudinary.com/drfdvwyob/image/upload/v1620512181/grid01_ayhpmx.jpg" alt="grabbo image"/>
           </BottomLeft>
           <BottomRight>
             
               <Header>World Class Medical
And Health Services</Header>
               <Text>Grabbo Fertility Clinic reiterates the pledge to help all and give hope to those who have lost hope. Grabbo Fertility Clinic is ready and able to care for your little ones. </Text>
           </BottomRight>
       </Body>
    )
}

const Body = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 80px;
grid-template-areas: "TopLeft TopRight"
"BottomLeft BottomRight";
max-width: 1100px;
width: 100%;
margin: 0 auto;
height: 100%;
@media only screen and (max-width: 800px){
    grid-template-columns: repeat(1,1fr);
grid-gap: 30px;
grid-template-areas:
 "TopRight"
 "TopLeft"
"BottomLeft"
"BottomRight";
justify-items: center;
align-items: center;
}
`
const TopLeft = styled.div`
max-width: 485px;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
grid-area:TopLeft;
`
const Header = styled(headerText)`
margin: 0;

`
const Text = styled(bodyText)`
color: ${grabboColors.grey};
margin: 24px 0;
`
const TopRight = styled.div`
max-width: 485px;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
grid-area:TopRight;
`
const Image = styled.img`
height: 350px;
max-width: 485px;
width: 100%;
@media only screen and (max-width: 650px){
    height: 250px;

}

@media only screen and (max-width: 320px){
    height: 200px;
}
`
const BottomLeft = styled.div`
max-width: 485px;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
grid-area:BottomLeft;
`
const BottomRight = styled.div`
max-width: 485px;
grid-area:BottomRight;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`
export default Grids
