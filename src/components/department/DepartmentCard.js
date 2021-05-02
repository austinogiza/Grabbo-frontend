import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { tinyHeader } from '../../styles/TextStyles'

const DepartmentCard = ({name,img, link}) => {
    return (
        <Body img={img}>

<Blue />
<Name>{name}</Name>
<CardLink to={link}/>
        </Body>

    )
}

const Body = styled.div`
width: 100%;
height: 349px;
max-width: 360px;
display: flex;
flex-direction: column;
justify-content: flex-end;
background: url(${props => props.img})  no-repeat center center/cover;
align-items: center;
position: relative;
border-radius: 20px;
padding: 10px 32px;
`
const Name = styled(tinyHeader)`
position: relative;
z-index: 42;
margin-bottom: 56px;
color: ${grabboColors.white};
@media only screen and (max-width: 650px){
    margin-bottom: 32px;
}
`
const CardLink = styled(Link)`
position: absolute;
z-index: 40;
width: 100%;
height: 100%;
top: 0;
left: 0;
object-fit: cover;
`
const Blue = styled.div`
position: absolute;
z-index: 40;
width: 100%;
height: 100%;
top: 0;
left: 0;border-radius: 20px;
background: rgba(57, 108, 240, 0.3);
`
export default DepartmentCard
