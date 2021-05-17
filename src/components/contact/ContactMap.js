import React from 'react'
import styled from 'styled-components'
import { Photo } from '../../container/Constraint'

const ContactMap = () => {
    return (
    <Body>
    <Map>
        <MapImage src="https://res.cloudinary.com/drfdvwyob/image/upload/v1619740901/map_yobj3l.jpg" alt="grabbo map"/>
    </Map>
    <Map>
        <MapImage src="https://res.cloudinary.com/drfdvwyob/image/upload/v1619740901/map_yobj3l.jpg" alt="grabbo map"/>
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
const MapImage = styled(Photo)`

`

export default ContactMap
