import React, {useEffect} from 'react'
import styled from 'styled-components'
import Gallery from '../components/home/Gallery'
import Goal from '../components/home/Goal'
import Grids from '../components/home/Grids'
import HomeDepartments from '../components/home/HomeDepartments'
import HomeHero from '../components/home/HomeHero'
import HomeMessage from '../components/home/HomeMessage'
import Professionals from '../components/home/Professionals'
import Specialty from '../components/home/Specialty'
// import Testimonials from '../components/home/Testimonials'
import {Container} from '../container/Constraint'
const Home = () => {

     useEffect(()=>{
          document.title = "Home - Grabbo Fertility Clinic"
     },[])
    return (
     <Body>
     <HomeHero/>
     <LargeContainer>
<Specialty/>
<Grids/>
<Goal/>
<Professionals/>
</LargeContainer>

<HomeDepartments/>
<LargeContainer>

<Gallery/>
     </LargeContainer>
<HomeMessage/>
     </Body>
    )
}

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const LargeContainer = styled(Container)`
padding: 10px 40px;
display: flex;
flex-direction: column;

`
export default Home
