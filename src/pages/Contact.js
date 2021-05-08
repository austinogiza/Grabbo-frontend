import React, { useEffect } from 'react'
import styled from 'styled-components'
import ContactHero from '../components/contact/ContactHero'
import ContactMain from '../components/contact/ContactMain'
import ContactSection from '../components/contact/ContactSection'
import Message from '../components/Message'

const Contact = () => {
    useEffect(()=>{

document.title = "Contact Us - Grabbo Fertility Clinic"
    }, [])
    return (
        <Body>
           <BodyContainer>

<ContactHero/>
<ContactMain/>
<ContactSection/>


           </BodyContainer>
          <Message/>
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
max-width: 1200px;
width: 100%;
margin: 0 auto;
height: 100%;
padding: 10px 40px;
`

export default Contact
