"use client"
import { AboutSectionButton } from "@/styles/ButtonStyles"
import { GrabboHeader3, GrabboLargeBody } from "@/styles/TextStyles"
import { ArrowRight } from "iconsax-react"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"
const AboutShowCase = () => {
  return (
    <GrabboShowCase>
      <MainOverlay />
      <ShowcaseWrapper>
        <ShowCaseText>
          We’re Setting The New Standards In Health Sector
        </ShowCaseText>
        <ShowcaseSubText>
          At Grabbo, our commitment to excellence is unwavering. With
          state-of-the-art facilities nestled in the heart of the community, we
          provide cutting-edge medical care without losing the personal touch
          that makes all the difference.
        </ShowcaseSubText>
        <ShowcaseWrapperButton>
          <a
            href="https://www.youtube.com/watch?v=UmdPHoXQhPE"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <ShowcaseButton>
              Take a tour with grabbo <AboutArrow />
            </ShowcaseButton>
          </a>
        </ShowcaseWrapperButton>
      </ShowcaseWrapper>
    </GrabboShowCase>
  )
}
const GrabboShowCase = styled.div`
  min-height: 950px;
  width: 100%;

  background: url("/images/grabbooo.webp") no-repeat center center/cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ShowcaseWrapper = twc.div`
text-white
max-w-[1320px]
max-auto p-4
text-center
relative z-10
flex flex-col items-center justify-center

`
const ShowCaseText = twc(GrabboHeader3)`
text-white
text-center
max-w-[750px] mx-auto
`
const ShowcaseSubText = twc(GrabboLargeBody)`
text-neutral-200
text-center
max-w-[800px]
mx-auto
`
const ShowcaseWrapperButton = twc.div`
max-w-[350px]
mx-auto
w-full
my-10
`
const ShowcaseButton = twc(AboutSectionButton)`

`
const AboutArrow = twc(ArrowRight)`
 w-8 h-8 text-white ml-2`

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
`
export default AboutShowCase
