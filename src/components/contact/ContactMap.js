import React from 'react'
import styled from 'styled-components'

const ContactMap = () => {
    return (
    <Body>
    <Map>
    <iframe title='first map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6119676926623!2d7.405646014787172!3d9.099067293472284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4dd7f121975ae70!2sGrabbo%20Fertility%20Clinic%20%26%20Diagnostic%20Centre!5e0!3m2!1sen!2sca!4v1624141817311!5m2!1sen!2sca" className='max-w-lg max-h-96 h-full w-full' allowfullscreen="" loading="lazy"></iframe>
    </Map>
    <Map>
    <iframe title="second map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.4678672729415!2d7.422877314787249!3d9.112143393463187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa182004abb5a1d1d!2sGrabbo%20fertility%20clinic!5e0!3m2!1sen!2sca!4v1624141866908!5m2!1sen!2sca" className='max-w-lg max-h-96 h-full w-full' allowfullscreen="" loading="lazy"></iframe>
    </Map>

    </Body>
    )
}

const Body = styled.div`
grid-area: Map;
width: 100%;
min-height: 600px;
display: grid;
grid-template-rows: repeat(2,1fr);
grid-gap: 24px;
@media only screen and (max-width: 650px){
    grid-template-rows: repeat(1,1fr);

}
`

const Map = styled.div`
width: 100%;
max-width: 500px;
margin: 8px auto;
height: 400px;
@media only screen and (max-width: 650px){
    height: 300px;

}
`


export default ContactMap
