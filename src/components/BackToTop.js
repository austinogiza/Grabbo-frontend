import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const BackToTop = () => {
    const [toggle, setToggle]=useState(false)

const handleTop = ()=>{
window.scrollTo(0,0)
   
}


const changeVisibility =()=>{
        if(window.pageYOffset> 300){
            setToggle(true)

        }else{
            setToggle(false) 
        }
    }
useEffect(()=>{

window.addEventListener('scroll',changeVisibility)

}, [])
    return (
     <Back onClick={handleTop} className={toggle ? 'flex transition': 'hidden'}>
          <Backbutton className="fixed bottom-8 right-8 rounded-full w-12 h-12 z-50 text-white justify-center items-center flex cursor-pointer bg-blue-800 ">
          <Backicon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>
          </Backicon>
      </Backbutton>
     </Back>
    )
}

const Backbutton = styled.div``
const Backicon = styled.div``
const Back=styled.div`

`
export default BackToTop
