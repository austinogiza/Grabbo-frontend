import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'

const ContactSection = () => {

    return (
      <Body>
      <ContactMap/>
<ContactForm/>

      </Body>
    )
}

const Body = styled.div`
width: 100%;
min-height: 850px;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 80px;
grid-template-areas: "Map Form";
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
grid-gap: 24px;
grid-template-areas: "Form"
"Map";
}

`

export default ContactSection
