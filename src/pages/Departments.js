import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DepartmentCard from '../components/department/DepartmentCard'
import Hero from '../components/Hero'
import LoadingCard from '../components/LoadingCard'
import Message from '../components/Message'
import { LargeContainer } from '../container/Constraint'
import { DepartmentsList } from '../utils/api'

const Departments = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchDepartment =()=>{
        setLoading(true)

        axios.get(DepartmentsList)
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
        .catch(err=>{

            setLoading(false)
        })
    }

    useEffect(()=>{

document.title = `Departments - Grabbo Fertility Clinic`
    
fetchDepartment()
}, [])


    return (
        <Body>
        <Hero 
        img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619482080/doctor_dy1osj.jpg" 
        header="Departments" 
        text="Grabbo fertility clinic is designed to facilitate the provisions of efficiency and reliable IVF services."/>
<Container>
<Depart>
{loading ? 

<>
{loading && [1,2,3,4, 5,6].map(item => 
<LoadingCard key={item}/>
)}

</>: <>

{data && data.map(data=>
    <DepartmentCard 
img={data.image}
name={data.title} 
link={`/department/${data.slug}`}/>
)}


</>}
</Depart>

</Container>
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

const Container = styled(LargeContainer)`
display: flex;
flex-direction: column;
width: 100%;
padding: 10px 24px;

`
const Depart = styled.div`
display: grid;
width:100%;
grid-template-columns: repeat(3,1fr);
grid-gap: 60px;
min-height: 300px;
margin: 80px auto;

@media only screen and (max-width: 850px){
    grid-template-columns: repeat(2,1fr);
    grid-gap: 32px;
    margin: 40px auto;
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 16px;
    margin: 24px auto;
}
`

export default Departments
