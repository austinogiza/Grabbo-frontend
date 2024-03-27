"use client"
import {
  BoldGrabboHeader6,
  GrabboHeader4,
  GrabboHeaderCaptionLarge,
  MainGrabboHeader4,
} from "@/styles/TextStyles"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const AboutExpectation = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center min-h-[750px] lg:my-40 my-20 px-4">
        <div className="max-w-[1320px] flex flex-col items-center justify-center ">
          <div className="flex lg:flex-row flex-col items-start justify-center lg:gap-20 gap-10">
            <SectionSubText>Introduction </SectionSubText>
            <div className="grow">
              <SectionTitle>
                Experience the thrill of eco-friendly driving with our electric
                cars. Powered by the latest technology, our electric cars take
                you into the future without leaving a carbon footprint.
              </SectionTitle>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-center w-full gap-10 my-20">
            {[
              "/images/introduction-pic-1.jpg",
              "/images/introduction-pic-2.jpg",
            ].map((image, index) => (
              <ImageWrapper className="" key={index}>
                <MainOverlay />
                <SectionImage src={image} alt="grabbo image" />
              </ImageWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutButton = twc.div``
const TitleArrow = twc.div``
const ImageWrapper = twc.div`
w-full rounded-2xl object-cover  md:rounded-xl
flex relative
max-w-[660px] min-h-[481px]
mx-auto
`
const SectionTitle = twc(GrabboHeader4)`
lg:mb-10 mb-2
`
const SectionSubText = twc(GrabboHeaderCaptionLarge)`
text-neutral-500
`

const SectionImage = twc.img`
w-full rounded-2xl object-cover  md:rounded-xl
flex relative
max-w-[660px] min-h-[481px]
mx-auto

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

export default AboutExpectation
