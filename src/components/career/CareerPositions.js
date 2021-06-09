import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mainButton } from '../../styles/Button'
import { grabboColors } from '../../styles/ColorStyles'
import { headerText, bodyText,mediumHeader,smallText, tinyHeader } from '../../styles/TextStyles'
import {FiArrowUpRight} from 'react-icons/fi'
import { CareerList } from '../../utils/api'
import axios from 'axios'
import LoadingCard from '../LoadingCard'
import { Link } from 'react-router-dom'


const CareerPositions = ({positionRef}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchPlacement = ()=>{
        setLoading(true)
        axios.get(CareerList)
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
        .catch(err=>{

            setLoading(false)
        })
    }
    
useEffect(() => {
    fetchPlacement()
}, [])
    return (
        <Body ref={positionRef}>

        <BodyContainer>
        <Cover>
        
        <Title>Positions Available</Title>
        <Text>We owe the general public. Positions available will be made known to the general public immediately they are available and immediately they close!</Text>
      
        </Cover>
        <Positions>

        {loading ?
        
        <>
        <Wrapper>
<LoadingCard/>
<LoadingCard/>
<LoadingCard/>
</Wrapper>


        </>:
        
        <>
   

        {data &&
        
        <>

{data.length > 0 ? 

<>
<Wrapper>
{data.map(data=>

    <Coverbox>

    <CoverboxLink to={`/career/${data.slug}`}/>
                    <Textwrap>
                    <TextTitle>Hello {data.title}</TextTitle>
        <Textsmall>{data.location}</Textsmall>
                    </Textwrap>
                      <IconWrap><Icon/></IconWrap>
                </Coverbox>
)}
                </Wrapper>
</>

:<>



<Empty>
            <EmptyTitle>No job placement yet</EmptyTitle>

            <Button to='/' >Head Home</Button>
            </Empty>

</>}

        </>
        }
            



        </>}

         
        </Positions>
        
        </BodyContainer>

                </Body>
    )
}


const Body = styled.div`
min-height: 400px;
width: 100%;
padding: 10px 24px;
margin: 80px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${grabboColors.white};
@media only screen and (max-width:660px){
    min-height: 300px;
    margin: 40px 0;

}
`

const BodyContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 1300px;
width: 100%;
margin: 0 auto;
height: 100%;
/* align-items: center;
justify-content: center; */

`
const Cover = styled.div`
width: 100%;
max-width: 500px;
min-height: 150px;
margin: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
z-index: 3;
`
const Title = styled(headerText)`
margin:  0;
text-align: left;
`

const Button = styled(mainButton)`
margin: 0;

`
const Text = styled(bodyText)`
margin: 24px 0;
text-align: left;
color:  ${grabboColors.grey};
`

const Icon= styled(FiArrowUpRight)`
color:  ${grabboColors.black};
transition: 0.4s ease-in;
width: 40px;
height: 40px;
${Button}:hover & {
    transition: 0.4s ease-in;
    color:  ${grabboColors.primary};
}
`


const Positions = styled.div`
width: 100%;
min-height: 400px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`
const Wrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
min-height: 400px;
grid-auto-rows: minmax(200px,auto);
grid-gap: 48px;
@media only screen and (max-width: 1030px){
    grid-template-columns: repeat(2,1fr);
    
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 24px;
}

@media only screen and (max-width: 450px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 16px;
}

`
const Coverbox = styled.div`
min-height: 140px;
max-height: 160px;
max-width: 400px;
width: 100%;
margin: 0 auto;
padding: 10px 24px;
border-radius: 10px;
align-items: center;
position: relative;
justify-content: center;
background: ${grabboColors.white};
box-shadow: 0px 20px 40px rgba(57, 108, 240, 0.05);
display: grid;
grid-template-columns: 260px auto;
grid-gap: 32px;

@media only screen and (max-width: 450px){
    max-width: 350px;
    grid-gap: 16px;
    grid-template-columns: 200px auto;
}
`
const Textwrap = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`
const IconWrap  = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const TextTitle = styled(tinyHeader)`
margin:  0;
`

const CoverboxLink = styled(Link)`

position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
` 
const Textsmall = styled(smallText)`
margin: 16px 0;
color: ${grabboColors.grey};
`
const Empty = styled.div`
width: 100%;
max-width: 500px;
min-height: 150px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items:  center;
justify-content: center;
`
const EmptyTitle = styled(mediumHeader)`
text-align: center;
margin: 32px 0;
`
export default CareerPositions
