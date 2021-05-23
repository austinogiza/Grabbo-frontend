import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { blogList } from '../utils/api'
import BlogCard from '../components/blog/BlogCard'
import Message from '../components/Message'
import { BigContainer } from '../container/Constraint'
import { grabboColors } from '../styles/ColorStyles'
import { headerText } from '../styles/TextStyles'
import { mainButton } from '../styles/Button'
import LoadingCard from '../components/LoadingCard'



const Blog = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    async function fetchBlogPosts(){
        setLoading(true)
        await axios.get(blogList)
        .then(res=> {
            setData(res.data)
            setLoading(false)
            
        })
        .catch(err=>{
            setLoading(false)
        })
    }

    useEffect(()=>{

document.title = `Blog - Grabbo Fertility Clinic`

fetchBlogPosts()

    }, [])

  
    return (
        <Body>
<Container>

<Header>
<Headertext>News</Headertext>
       </Header>


{loading ? 
<>
<Depart>

{loading && [1,2,3].map(load => <LoadingCard key={load}/>)}

</Depart>
    
</>
:
<>

{data.length > 0 ? 
<>
<Depart>
{data.map(blog=> 
    <BlogCard 
    key={blog.id}
img={blog.image}
name={blog.title}
description={blog.description}
link={`/blog/${blog.slug}`}
/>
)}
</Depart>
</>

:
<>
<DepartNo>
<NoPostTitle>
<Title>No blog post available</Title>
<Button to='/'>Go Home</Button>
</NoPostTitle>
</DepartNo>
</>
}


</>

}
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
padding: 10px 40px;

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

const DepartNo = styled.div`

width:100%;
min-height: 300px;
display: flex;
justify-content: center;
align-items: center;
`
const NoPostTitle = styled.div`
width:100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled(headerText)``
const Button = styled(mainButton)`
margin: 24px 0;
`

export default Blog
