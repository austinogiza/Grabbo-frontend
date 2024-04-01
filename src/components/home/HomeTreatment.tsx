"use client"

import {
  GrabboHeader4,
  GrabboHeaderCaption,
  GrabboHeaderCaptionLargeRegular,
} from "@/styles/TextStyles"
import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"

import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const HomeTreatment = () => {
  return (
    <div className="min-h-[750px] items-center flex justify-center lg:my-32 my-20">
      <AboutHighlightContainer>
        <ValuesInfoRow className="">
          <ValuesText>We prioritize your health and well-being</ValuesText>
          <ValuesInfoTitle className="max-w-[450px]">
            We Help You Stay Healthy
          </ValuesInfoTitle>
          <ValuesInfoSubTitle className="max-w-[550px]">
            At Grabbo Fertility Clinic and Diagnostic Centre, we prioritize your
            health and well-being. Our dedicated team of professionals is here
            to provide exceptional medical care tailored to your needs.
          </ValuesInfoSubTitle>
          <div className="max-w-[280px] w-full ">
            {" "}
            <PrimaryLinkButton href="contact" title="Get in touch" />
          </div>
        </ValuesInfoRow>{" "}
        <ValueContainer className="flex lg:flex-row flex-col gap-10 w-full">
          <MainOverlay />
          <ValueWrapperIcon src="/images/medical01.webp" alt="" />
        </ValueContainer>
      </AboutHighlightContainer>
    </div>
  )
}
const ValuesText = twc(GrabboHeaderCaption)`
mb-2 lg:mb-4 text-primary-500
border-2 border-primary-500 px-3 py-2 rounded-full
`
const ValuesInfoRow = twc.div`
w-full justify-center items-start flex flex-col
`
const ValuesInfoTitle = twc(GrabboHeader4)`
mb-1 text-h1 lg:mb-2
`
const ValuesInfoSubTitle = twc(GrabboHeaderCaptionLargeRegular)`
text-neutral-400 my-1
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
  background: rgba(0, 0, 0, 0.24);
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
max-w-[1180px] mx-auto w-full flex lg:flex-row flex-col lg:gap-20 gap-10  items-center justify-center lg:px-0  px-4
`

export default HomeTreatment
