"use client"
import { SectorData, ValuesData } from "@/data/ValuesData"
import {
  GrabboHeader4,
  GrabboHeader7,
  GrabboHeaderCaption,
  GrabboHeaderCaptionLargeRegular,
} from "@/styles/TextStyles"
import SiteOverlay from "@/utils/SiteOverlay"
import { TickCircle } from "iconsax-react"
import Image from "next/image"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"
import ValuesList from "./ValuesList"

const AboutValues = () => {
  return (
    <div className="min-h-[750px] items-center flex justify-center my-20">
      <AboutHighlightContainer>
        <ValueContainer className="flex lg:flex-row flex-col gap-10 w-full">
          <MainOverlay />
          <ValueWrapperIcon src="/images/technology-pic-1.jpg" alt="" />
        </ValueContainer>
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
          <ValuesWrapper>
            {ValuesData.map((data, index: number) => (
              <ValuesList title={data?.title} key={index} />
            ))}
          </ValuesWrapper>
        </ValuesInfoRow>
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

export default AboutValues
