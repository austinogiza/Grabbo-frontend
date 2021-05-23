import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';
import { blogDetail } from '../utils/api';


const BlogDetailed = () => {
    const [data, setData]= useState([])
    const [pageLoading, setLoading]= useState(false)

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

    

    useEffect(()=>{
        fetchBlogPost()
    }, [])
    return (
<Body>

</Body>
    )
}

const Body = styled.div`

`





export default BlogDetailed
