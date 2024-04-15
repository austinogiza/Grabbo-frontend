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
        <div className="max-w-[1180px] flex flex-col items-center justify-center ">
          <div className="flex lg:flex-row flex-col items-start justify-center lg:gap-20 gap-10">
            <SectionSubText>Exceptional Care, Tailored to You</SectionSubText>
            <div className="w-full max-w-[980px]">
              <SectionTitle>
                At Grabbo, we understand the profound journey of aspiring
                parents and are dedicated to making dreams of parenthood a
                reality.
              </SectionTitle>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-center w-full gap-2 my-20">
            {["/images/exceptional01.webp", "/images/exceptional02.webp"].map(
              (image, index) => (
                <ImageWrapper className="" key={index}>
                  <MainOverlay />
                  <SectionImage src={image} alt="grabbo image" />
                </ImageWrapper>
              )
            )}
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
  background: rgba(0, 0, 0, 0.24);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
  border-radius: inherit;
`

export default AboutExpectation
