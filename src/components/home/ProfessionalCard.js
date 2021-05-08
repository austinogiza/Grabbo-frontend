import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Photo } from '../../container/Constraint'
import { grabboColors } from '../../styles/ColorStyles'
import { bodyText, tinyHeader } from '../../styles/TextStyles'

const ProfessionalCard = ({name,description, img, link}) => {
    return (
        <Body>

<Image>
<Thumbnail src={img} alt={`Grabbo ${name}`}/>
</Image>
<Text>
<Name>{name}</Name>
<Description>{description}</Description>

</Text>
<CardLink to={link}/>
        </Body>

    )
}

const Body = styled.div`
width: 100%;
height: 450px;
max-width: 400px;
display: flex;
flex-direction: column;
justify-content: flex-start;
background: ${grabboColors.white};
align-items: center;
position: relative;
border-radius: 20px;

`
const Name = styled(tinyHeader)`
position: relative;
z-index: 42;
margin: 0;
color: ${grabboColors.black};
transition: 0.3s ease-in;
${Body}:hover &{
    color: ${grabboColors.primary};
}

`

const Text = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 24px 0 0 0;

`
const Description = styled(bodyText)`
color: ${grabboColors.grey};
margin: 16px 0;
transition: 0.3s ease-in;
${Body}:hover &{
    color: ${grabboColors.primary};
}
`

const Image = styled.div`
position: relative;
height: 300px;
max-width: 400px;
border-radius: 20px;
width: 100%;
margin: 0 auto;
`

const Thumbnail = styled(Photo)`
position: absolute;
z-index: 40;
width: 100%;
height: 100%;
top: 0;
left: 0;
object-fit: cover;
border-radius: 20px;
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

export default ProfessionalCard
