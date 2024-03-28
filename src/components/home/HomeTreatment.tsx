"use client"

import {
  GrabboHeader4,
  GrabboHeaderCaption,
  GrabboHeaderCaptionLargeRegular,
} from "@/styles/TextStyles"

import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const HomeTreatment = () => {
  return (
    <div className="min-h-[750px] items-center flex justify-center my-20">
      <AboutHighlightContainer>
        <ValuesInfoRow className="">
          <ValuesText>Features and Technology</ValuesText>
          <ValuesInfoTitle>
            Presenting Advanced Technology for the Driving Experience of the
            Future
          </ValuesInfoTitle>

          <ValuesInfoSubTitle>
            Our electric cars not only deliver environmentally friendly
            transportation solutions, but also bring an amazing driving
            experience through cutting-edge features. From super-fast charging
            to smart device integration,
          </ValuesInfoSubTitle>
        </ValuesInfoRow>{" "}
        <ValueContainer className="flex lg:flex-row flex-col gap-10 w-full">
          <MainOverlay />
          <ValueWrapperIcon
            src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
            alt=""
          />
        </ValueContainer>
      </AboutHighlightContainer>
    </div>
  )
}
const ValuesText = twc(GrabboHeaderCaption)`
mb-2 lg:mb-4
`
const ValuesInfoRow = twc.div`
w-full justify-center items-start flex flex-col
`
const ValuesInfoTitle = twc(GrabboHeader4)`
mb-2 text-h1 lg:mb-4
`
const ValuesInfoSubTitle = twc(GrabboHeaderCaptionLargeRegular)`
text-neutral-400 my-3
`
const ValueWrapperIcon = twc.img`
min-h-[700px] max-w-[570px]
w-full
rounded-2xl object-cover
flex
relative
justify-center
items-center

`

const MainOverlay = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.44);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
  border-radius: inherit;
`
const ValuesWrapper = twc.div`
flex flex-col
max-w-[650px]
w-full my-5
`

const ValueContainer = twc.div`
min-h-[700px] max-w-[570px]
w-full
rounded-2xl object-cover
flex
relative
justify-center
items-center
`
const AboutHighlightContainer = twc.div`
max-w-[1320px] mx-auto w-full flex lg:flex-row flex-col lg:gap-20 gap-10  items-center justify-center lg:px-0  px-4
`

export default HomeTreatment
