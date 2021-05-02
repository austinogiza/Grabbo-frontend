import React, {useEffect} from 'react'
import styled from 'styled-components'
import AboutHero from '../components/about/AboutHero'
import Standard from '../components/about/Standard'
import Statement from '../components/about/Statement'
import Who from '../components/about/Who'
import Message from '../components/Message'


const About = () => {

    useEffect(()=>{

document.title = `About - Grabbo Fertility Clinic`
    }, [])
    return (
        <>
<Body>
<AboutHero/>
<Who/>
<Statement/>
<Standard/>
</Body>
<Message/>
</>
    )
}

const Body = styled.div`
padding: 10px 24px;
display: flex;
flex-direction: column;
width: 100%;
`
export default About
