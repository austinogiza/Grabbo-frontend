import React, { useEffect } from 'react'
import styled from 'styled-components'
import BlogCard from '../components/blog/BlogCard'
import Message from '../components/Message'
import { BigContainer } from '../container/Constraint'
import { grabboColors } from '../styles/ColorStyles'
import { headerText } from '../styles/TextStyles'

const Blog = () => {

    useEffect(()=>{

document.title = `Blog - Grabbo Fertility Clinic`
    }, [])

  
    return (
        <Body>
<Container>

<Header>
<Headertext>News</Headertext>
       </Header>
<Depart>

<BlogCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name="Grabbo Fertility Clinic IVF Triplet Story"
description="Grabbo fertility clinic is designed to facilitate the provisions of efficiency 
and reliable IVF services."
link={`/blog/slug`}
/>
<BlogCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name="Grabbo Fertility Clinic IVF Triplet Story"
description="Grabbo fertility clinic is designed to facilitate the provisions of efficiency 
and reliable IVF services."
link={`/blog/slug`}
/>
<BlogCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name="Grabbo Fertility Clinic IVF Triplet Story"
description="Grabbo fertility clinic is designed to facilitate the provisions of efficiency 
and reliable IVF services."
link={`/blog/slug`}
/>
<BlogCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name="Grabbo Fertility Clinic IVF Triplet Story"
description="Grabbo fertility clinic is designed to facilitate the provisions of efficiency 
and reliable IVF services."
link={`/blog/slug`}
/>
<BlogCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name="Grabbo Fertility Clinic IVF Triplet Story"
description="Grabbo fertility clinic is designed to facilitate the provisions of efficiency 
and reliable IVF services."
link={`/blog/slug`}
/>
<BlogCard 
img="https://res.cloudinary.com/drfdvwyob/image/upload/v1619485293/Rectangle_17_u1haqx.png"
name="Grabbo Fertility Clinic IVF Triplet Story"
description="Grabbo fertility clinic is designed to facilitate the provisions of efficiency 
and reliable IVF services."
link={`/blog/slug`}
/>

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
background: ${grabboColors.smoke};
`

const Container = styled(BigContainer)`
display: flex;
flex-direction: column;
width: 100%;
padding: 10px 24px;

`
const Header = styled.div`
min-height: 48px;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

`
const Headertext = styled(headerText)`

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

export default Blog
