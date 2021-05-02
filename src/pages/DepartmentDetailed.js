import React, { useEffect } from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Message from '../components/Message'
import { LargeContainer } from '../container/Constraint'
import { grabboColors } from '../styles/ColorStyles'
import { headerText, bodyText } from '../styles/TextStyles'

const DepartmentDetailed = () => {

    useEffect(()=>{

document.title = `Departments Detail - Grabbo Fertility Clinic`
    }, [])


    return (
        <Body>
        <Hero 
        img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485687/Rectangle_3_sob2dp.jpg" 
        header="Obstetrics & Gynaecology" 
        />
<Container>
<Depart>
<Title>Obstetrics & Gynaecology</Title>
<BodyText>
We manage cases of infertility, fibroid surgeries & menstrual disorders.
In addition, we provide comprehensive care for women in every stage of life – from routine gynaecologic care, to childbirth, to right up to menopause.
</BodyText>
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
display: flex;
width:100%;
flex-direction: column;
min-height: 300px;
margin: 80px auto;

@media only screen and (max-width: 850px){

    margin: 40px auto;
}
@media only screen and (max-width: 650px){

    margin: 24px auto;
}
`
const Title = styled(headerText)`
margin: 24px 0;
`
const BodyText = styled(bodyText)`
margin: 0;
color: ${grabboColors.grey};
`
export default DepartmentDetailed
