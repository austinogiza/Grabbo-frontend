import React,  { useRef, useEffect} from 'react'
import styled from 'styled-components'
import CareerHero from '../components/career/CareerHero'
import CareerPositions from '../components/career/CareerPositions'

const Careers = () => {

    

    const positionRef = useRef(null)

    const goTo =()=>{
        window.scrollTo({
            top: positionRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    useEffect(()=>{

document.title = "Grabbo Careers"
    }, [])
    return (
       <Body>
           <BodyContainer>

<CareerHero goTo={goTo}/>
<CareerPositions positionRef={positionRef}/>


           </BodyContainer>
          
       </Body>
    )
}
const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

`
const BodyContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 1300px;
width: 100%;
margin: 0 auto;
height: 100%;
padding: 10px 40px;
`

export default Careers
