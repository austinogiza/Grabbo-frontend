import React from 'react'
import styled from 'styled-components'
import AboutTextList from './AboutTextList'

const AboutList = () => {

    const Text =[

        {
            id: 1,
            header:"Patient Commitment.",
            text: "To provide one on one specialized care."
        },
        {
            id: 2,
            header:"Respect.",
            text: " To treat all with respect and dignity."
        },
        {
            id: 3,
            header:"Integrity.",
            text: "To adhere to the highest standards."
        },
        {
            id: 4,
            header:"Passion for excellence.",
            text: "To deliver best outcomes."
        },
        {
            id: 5,
            header:"High performance team.",
            text: "To provide the best care and treatment."
        },
        {
            id: 6,
            header:"Quality.",
            text: "To provide safe and quality health care services."
        },
        {
            id: 7,
            header:"Compassion.",
            text: "To act with sensitivity and empathy."
        },

    

    ]
    return (
      <Body>
     {Text.map(text=> 
        <AboutTextList key={text.id} top={text.header} bottom={text.text}/>
        )}

      </Body>
    )
}

const Body = styled.div`
display: grid;
width:100%;
grid-template-columns: repeat(2,1fr);
grid-gap: 24px;
min-height: 300px;
margin: 40px auto;
@media only screen and (max-width: 750px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 16px;
}
`

export default AboutList
