import React, { useEffect } from 'react'
import styled from 'styled-components'
import DepartmentCard from '../components/department/DepartmentCard'
import Hero from '../components/Hero'
import Message from '../components/Message'
import { LargeContainer } from '../container/Constraint'

const Departments = () => {

    useEffect(()=>{

document.title = `Departments - Grabbo Fertility Clinic`
    }, [])

    let slug ;
    return (
        <Body>
        <Hero 
        img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619482080/doctor_dy1osj.jpg" 
        header="Departments" 
        text="Grabbo fertility clinic is designed to facilitate the provisions of efficiency and reliable IVF services."/>
<Container>
<Depart>
<DepartmentCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name={`Obstetrics & Gynaecology`} 
link={`/department/${slug}`}/>
<DepartmentCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name={`Obstetrics & Gynaecology`} 
link={`/department/${slug}`}/>
<DepartmentCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name={`Obstetrics & Gynaecology`} 
link={`/department/${slug}`}/>

<DepartmentCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name={`Obstetrics & Gynaecology`} 
link={`/department/${slug}`}/>
<DepartmentCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name={`Obstetrics & Gynaecology`} 
link={`/department/${slug}`}/>
<DepartmentCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name={`Obstetrics & Gynaecology`} 
link={`/department/${slug}`}/>
<DepartmentCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name={`Obstetrics & Gynaecology`} 
link={`/department/${slug}`}/>

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
padding: 10px 40px;

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
