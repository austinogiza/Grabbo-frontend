import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { headerText } from '../../styles/TextStyles'
import { HomePersonnelsList } from '../../utils/api'
import LoadingCard from '../LoadingCard'
import ProfessionalCard from './ProfessionalCard'



const Professionals = () => {
    const [data, setData]= useState([])
    const [loading, setLoading] = useState(false)
const fetchPros =()=>{
    setLoading(true)

    axios.get(HomePersonnelsList)
    .then(res=>{
        setData(res.data)
        setLoading(false)

    })
    .catch(err=>{
        setLoading(false)

    })
}

useEffect(()=>{
    fetchPros()
}, [])
    return (
       <Body>

           <Title>
               <Header>Meet Our Health Professionals</Header>
              
           </Title>
           <Pros>
<ProsGrid>

{loading? 
<>
{loading && [1,2,3,4,5].map(res=> 
<LoadingCard key={res}/>
)}

</>:

<>
{data && data.map(data=>
    <ProfessionalCard 
     key={data.id}
    img={data.photo} 
    name={data.name} 
    description={data.title}
    link={`/professional/${data.slug}`}

    />

)

}


</>}

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
margin: 24px 0;
`
const Title = styled.div`
min-height: 50px;
display: flex;
max-width: 700px;
margin: 0 auto;
align-items: center;
flex-direction: column;
width: 100%;
text-align: center;
white-space: nowrap;
`
const Header = styled(headerText)`
width: 100%;
margin: 0;

`

const Pros = styled.div`
width: 100%;
margin: 32px 0;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;

`
const ProsGrid = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 16px;
place-items: center;
@media only screen and (max-width: 850px){
    grid-template-columns: repeat(2,1fr);
grid-gap: 16px;
place-items: center;
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 16px;
}
`
export default Professionals
