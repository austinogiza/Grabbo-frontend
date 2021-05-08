import React from 'react'
import styled from 'styled-components'

const Grids = () => {
    return (
       <Body>
           <TopLeft>
               <Header>We Help You Stay Healthy</Header>
               <Text>Yearly, we give couples affordable costs for treatment and drugs to aid our goal and their goal</Text>
           </TopLeft>
           <TopRight>
               <Image src="" alt="grabbo image"/>
           </TopRight>
           <BottomLeft>
               <Header>World Class Medical
And Health Services</Header>
               <Text>Grabbo Fertility Clinic reiterates the pledge to help all and give hope to those who have lost hope. Grabbo Fertility Clinic is ready and able to care for your little ones. With staff members who are certified in pediatric life support, we’re experienced in treating children from infancy through young adulthood.</Text>
           </BottomLeft>
           <BottomRight>
               <Image src="" alt="grabbo image"/>
           </BottomRight>
       </Body>
    )
}

const Body = styled.div`
padding: 10px 40px;
`
const TopLeft = styled.div`

`
const Header = styled.div`

`
const Text = styled.div`

`
const TopRight = styled.div`

`
const Image = styled.div`

`
const BottomLeft = styled.div`

`
const BottomRight = styled.div`

`
export default Grids
