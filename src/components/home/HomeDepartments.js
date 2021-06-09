import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mainButton } from '../../styles/Button'
import { grabboColors } from '../../styles/ColorStyles'
import {  headerText } from '../../styles/TextStyles'
import DeptCard from './DeptCard'
import noise from '../../assets/noise.png'
import axios from 'axios'
import { HomeDepartmentsList } from '../../utils/api'
import LoadingCard from '../LoadingCard'

const HomeDepartments = () => {
    const [data, setData]=useState([])
    const [loading, setLoading]=useState(false)

    const fetchDepartment = ()=>{

        setLoading(true)
        axios.get(HomeDepartmentsList)
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
        .catch(err=>{
            setLoading(false)
        })
    }

    useEffect(()=>{

fetchDepartment()
    }, [])

    return (
       <Body>

           <Title>
               <Header>Our Departments</Header>
            
           </Title>
           <Pros>
<ProsGrid>

{loading? 

<>
{loading && [1,2,3,4].map(item => 

<LoadingCard key={item}/>)}
</>:

<>
{data && data.map(data=>
    <DeptCard key={data.id} img={data.image} name={data.title} link={`/department/${data.slug}`}/>
)}

</>}


</ProsGrid>

           </Pros>
           <Title>
          <DeptButton to='/departments'>See Departments</DeptButton>
            
           </Title>
           <Noise src={noise} alt="Grabbo Noise"/>
       </Body>
    )
}

const Body = styled.div`
position: relative;
min-height: 600px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin: 40px 0;
padding: 10px 40px;
background: ${grabboColors.dark};
`
const Title = styled.div`
min-height: 70px;
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
text-align: center;
margin: 0;
position: relative;
z-index: 3;
`
const Header = styled(headerText)`
width: 100%;
margin: 24px 0 0 0;
color: ${grabboColors.white};
`

const Pros = styled.div`
width: 100%;
margin: 64px auto;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
max-width: 1100px;
@media only screen and (max-width: 650px){
    margin: 24px auto;
}
`
const ProsGrid = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 50px;
place-items: center;
@media only screen and (max-width: 950px){
    grid-template-columns: repeat(3,1fr);
grid-gap: 24px;
place-items: center;
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(2,1fr);
grid-gap: 16px;
place-items: center;
}
@media only screen and (max-width: 450px){
    grid-template-columns: repeat(1,1fr);
grid-gap: 16px;
}
`

const DeptButton = styled(mainButton)`
margin: 24px 0;
`

const Noise = styled.img`
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
z-index: 1;
`
export default HomeDepartments
