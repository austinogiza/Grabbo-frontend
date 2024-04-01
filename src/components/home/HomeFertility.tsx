"use client"

import {
  GrabboHeader4,
  GrabboHeaderCaption,
  GrabboHeaderCaptionLargeRegular,
} from "@/styles/TextStyles"
import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"

import Image from "next/image"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const HomeFertility = () => {
  return (
    <div className="min-h-[750px] items-center flex justify-center lg:mt-32 mt-20">
      <AboutHighlightContainer>
        <ValueContainer className="flex lg:flex-row flex-col gap-10 w-full">
          <MainOverlay />
          <ValueWrapperIcon src="/images/medical02.webp" alt="" />
        </ValueContainer>
        <ValuesInfoRow className="">
          <div className="mb-3">
            <FertilityWrapper>
              <FertilityIcon src="/icons/medical.svg" />
            </FertilityWrapper>
          </div>

          <ValuesInfoTitle className="max-w-[450px]">
            World Class Medical And Health Services
          </ValuesInfoTitle>

          <ValuesInfoSubTitle className="max-w-[550px]">
            We are committed to staying at the forefront of reproductive
            medicine. Our clinic is equipped with the latest diagnostic tools
            and cutting-edge technologies, allowing us to create personalized
            treatment plans that optimize your chances of success.
          </ValuesInfoSubTitle>
          <div className="max-w-[250px] w-full ">
            {" "}
            <PrimaryLinkButton href="about" title="Learn more about Grabbo" />
          </div>
        </ValuesInfoRow>
      </AboutHighlightContainer>
    </div>
  )
}

const FertilityWrapper = twc.div`
 flex items-center justify-center  w-12 h-12 bg-primary-50 rounded-full
`
const FertilityIcon = twc.img`
 w-6 h-6
`
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
text-neutral-400 my-2
`
const ValueWrapperIcon = twc.img`
min-h-[750px] max-w-[570px]
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

export default HomeFertility
