import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { headerText, tinyCaption } from '../../styles/TextStyles'

const Gallery = () => {
    return (
<Body>

<Title>
<Subcover>   <Subheader>Modern Hospital Facilities</Subheader></Subcover>
    <Header>Our Photo Gallery</Header>
   
</Title>
<Pros>
<ProsGrid>

</ProsGrid>

</Pros>
</Body>
    )
}


const Body = styled.div`
min-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin: 40px 0;
`
const Title = styled.div`
min-height: 70px;
display: flex;
max-width: 700px;
margin: 24px auto;
align-items: center;
flex-direction: column;
width: 100%;
text-align: center;
`
const Header = styled(headerText)`
width: 100%;
margin: 0;

`
const Subheader = styled(tinyCaption)`
width: 100%;
margin: 24px 0;
color: ${grabboColors.primary};

`

const Subcover= styled.div`
width: 100%;
display: flex;
height: 49px;
align-items: center;
max-width: 285px;
margin: 24px auto;
border-radius: 10px;
background: ${grabboColors.light};
`
const Pros = styled.div`
width: 100%;
margin: 40px 0;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;

`
const ProsGrid = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(5,1fr);
grid-gap: 50px;
place-items: center;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(2,1fr);
grid-gap: 16px;

}
/* @media only screen and (max-width: 450px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 16px;
} */
`
export default Gallery
