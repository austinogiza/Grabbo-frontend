import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Photo } from '../../container/Constraint'
import { grabboColors } from '../../styles/ColorStyles'
import { bodyText, tinyHeader } from '../../styles/TextStyles'

const BlogCard = ({name,description, img, link}) => {
    return (
        <Body>

<Image>
<Thumbnail src={img} alt={`Grabbo ${name}`}/>
<Blue />
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
max-width: 360px;
display: flex;
flex-direction: column;
justify-content: flex-start;
background: ${grabboColors.white};
align-items: center;
position: relative;
border-radius: 20px;
padding: 10px 24px 5px 24px;
`
const Name = styled(tinyHeader)`
position: relative;
z-index: 42;
margin: 0;
color: ${grabboColors.black};

`

const Text = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 0;
height: 100%;
`
const Description = styled(bodyText)`
color: ${grabboColors.grey};
margin: 24px 0;
`

const Image = styled.div`
position: relative;
height: 300px;
max-width: 326px;
border-radius: 10px;
width: 100%;
margin: 24px 0 ;
`

const Thumbnail = styled(Photo)`
position: absolute;
z-index: 40;
width: 100%;
height: 100%;
top: 0;
left: 0;
object-fit: cover;
border-radius: 10px;
object-position: center;
-o-object-position: center;
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
export default BlogCard
