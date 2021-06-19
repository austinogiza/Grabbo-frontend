import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';
import { blogDetail, commentDoneURL, commentFetchURL} from '../utils/api';
import Hero from '../components/BlogHero'
import PageLoad from '../components/PageLoading'

import Loading from '../components/Spinner'
import Notifications from '../components/Notifications';

const BlogDetailed = () => {

    const initial={
        name:"",
        comment:""
    }
    const [data, setData]= useState([])
    const [commentData, setCommentData]= useState([])
    const [pageLoading, setLoading]= useState(false)
    const [commented, setCommented]= useState(false)
    const [formLoading, setFormLoading]= useState(false)
    const [commentLoading, setCommentLoading]= useState(false)
    const [form, setForm] = useState(initial)


    const {

        name,
        comment
    } =form


    const fetchComment =()=>{
        setCommentLoading(true)
axios.get(commentFetchURL, {params: {slug}})
.then(res=>{
    setCommentData(res.data)
    setCommentLoading(false)
})
.catch(err=>{
    setCommentLoading(false)

})

    }


    const submitComment = e=>{
        setFormLoading(true)
        e.preventDefault()
        axios.post(commentDoneURL, {slug, name, comment})
        .then(res=>{
            setCommented(true)
            fetchComment()
            setForm(initial)
            setFormLoading(false)

        
            
        })
        .catch(err=>{
            setFormLoading(false)
        })

    }
    const {slug} = useParams();
  const fetchBlogPost =()=>{

    setLoading(true)
    axios.get(blogDetail(slug))
    .then(res=>{
       
        setData(res.data)
        console.log(data)
        setLoading(false)
    })
    .catch(err=>{
        setLoading(false)

    })
  }

  const handleChange =e=>{

    const {name, value }=e.target;
    setForm({...form,[name]:value})
  }
    

  if(commented){

    setTimeout(() => {
        setCommented(false)
    }, 2000);
  }

    useEffect(()=>{
        fetchBlogPost()
        fetchComment()
    }, [])
    return (
<Body>

{pageLoading ?


<>
<PageLoad/>

</>:


<>
{commented && <>
    <Notifications/>
</>}
{data && 

<>
<Hero img={data.image} header={data.title}/>

<Details className="bg-blue-800 w-full h-24">

    <Container className="max-w-6xl flex flex-row items-center h-full mx-auto">
    <Icons className="flex flex-row text-white cursor-pointer m-4 h-full items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
        <IconsText  className="ml-2 text-white text-base font-normal">
    {new Date(`${data.date}`).toDateString()}
        </IconsText>
    </Icons>
    <Icons className="flex flex-row h-full cursor-pointer text-white items-center m-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
        <IconsText className="ml-2 text-white text-base font-normal">
        {data.comments ? data.comments.length : 0}    {data.comments && data.comments.length > 1 ? "Comments" : "Comment"}
        </IconsText>
    </Icons>


    </Container>
</Details>


<BlogDetails  className="container max-w-6xl mx-auto mt-4 mb-4 min-h-0 h-full"  dangerouslySetInnerHTML={{__html:data.text}} />

</>
}

    <Container className="mx-auto container max-w-6xl flex flex-col">

    <CommentSection  className="container max-w-6xl mx-auto my-4 mb-4 h-auto flex flex-col min-h-0">

<CommentHeader className="h-12 my-4">
    <Commenttitle className="text-black text-4xl font-semibold">{data.comments ? data.comments.length : 0}    {data.comments && data.comments.length > 1 ? "Comments" : "Comment"} </Commenttitle>
</CommentHeader>
<Commented className="min-h-0 h-full  flex flex-col" >
{commentLoading && 

<>
<PageLoad/>
</>}


{commentData.length> 0?

<>
{commentData.map(comment=>

    <Commentbox className="my-4 w-full h-full min-h-0 py-4 px-4 bg-gray-100 rounded-md">
    <Commenth1 className="text-2xl font-semibold text-black">
   {comment.user} on {new Date(comment.date).toDateString()}
    </Commenth1>
    <Commenttext className="text-base font-normal text-gray-500 mt-3 text-left">Well-done Doc,pls come to {comment.comment}</Commenttext>
</Commentbox>

)}
</>

:<>
<Nocomment className="my-4 flex justify-center items-center w-full">
<p className="text-md font-medium">No comment on this post yet. Kindly drop a comment</p>
    
</Nocomment>
</>}




</Commented>


<Commenttitle className="text-black text-4xl font-semibold">Leave a comment</Commenttitle>
<NotCommented>

<form className="space-y-6 max-w-lg mx-auto my-4" onSubmit={submitComment}>
            <div>
              <label htmlFor="name" className="block text-lg mt-5 font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
            value={name}
            onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>


            </div>
            <div class="flex flex-col ">
          <label for="comment" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
            Your thoughts
          </label>
          <div class="mt-2">
            <textarea 
            required
            id="comment" name="comment"
                 onChange={handleChange}
                 value={comment}
             rows="6" class="max-w-lg resize-none shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2 focus:outline-none sm:text-sm border border-gray-300 rounded-md"></textarea>
            <p class="mt-2 text-sm text-gray-500">Write a few sentences about the post.</p>
          </div>
        </div>
        <div>
              <button
                type="submit"
                className="w-full flex justify-center mt-10 py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              {formLoading ? <Loading/> : "  Submit"}
              </button>
            </div>


            </form>

</NotCommented>

</CommentSection>
    </Container>


</>}

</Body>
    )
}

const Body = styled.div`

`
const Nocomment= styled.div`

`
const Commentbox = styled.div`

`
const Commenth1 = styled.h1`

`
const Commenttext = styled.p`

`

const Details = styled.div``
const Container = styled.div``

const Icons =styled.div`

`
const IconsText =styled.div`

`

const BlogDetails = styled.div`
img{
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
    width: 100%;
}
`
const CommentSection = styled.div`

`
const Commented = styled.div`

`
const NotCommented = styled.div`

`

const CommentHeader = styled.div``
const Commenttitle = styled.h1``
export default BlogDetailed
