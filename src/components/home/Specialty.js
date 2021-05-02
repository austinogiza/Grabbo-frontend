import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { bodyText, headerText } from '../../styles/TextStyles'
import ProsList from './ProsList'

const Specialty = () => {

    const special = [
        {id: 1,
        text: "Professional Staff"},
        {id: 2,
        text: "Emergency Case"},
        {id: 3,
        text: "Qualified Doctors"},
        {id: 4,
        text: "24/7 Services"}
    ]
    return (
       <Body>

           <Title>
               <Header>What’s Our Speciality</Header>
               <Subheader>Welcome To The World Class IVF Center In Nigeria</Subheader>
           </Title>
           <Pros>
<ProsGrid>
{special.map(special=>
<ProsList key={special.id} text={special.text}/>
)}
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
align-items: center;
flex-direction: column;
width: 100%;
text-align: center;
`
const Header = styled(headerText)`
width: 100%;
margin: 0;

`
const Subheader = styled(bodyText)`
width: 100%;
margin: 24px 0;
color: ${grabboColors.grey};

`
const Pros = styled.div`
width: 100%;
margin: 40px auto;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
max-width: 1100px;
`
const ProsGrid = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 50px;
place-items: center;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(2,1fr);
grid-gap: 24px;
place-items: center;
}
@media only screen and (max-width: 450px){
    grid-template-columns: repeat(1,1fr);
grid-gap: 24px;
}
`
export default Specialty
