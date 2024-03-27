"use client"
import { AboutSectionButton } from "@/styles/ButtonStyles"
import { grabboColors } from "@/styles/ColorStyles"
import {
  BoldGrabboHeader3,
  BoldGrabboHeader4,
  GrabboBody1,
  GrabboHeader2Medium,
  GrabboHeader2SemiBold,
  GrabboHeader3,
  GrabboHeader3Regular,
  GrabboHeader4,
  GrabboHeader6,
  GrabboHeader7,
  GrabboHeader7Medium,
  GrabboLargeBody,
  MainGrabboHeader4,
} from "@/styles/TextStyles"
import { ArrowRight } from "iconsax-react"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const AboutWeAre = () => {
  return (
    <WeContainer>
      <AboutTopWrapper>
        {" "}
        <AboutWrapper>
          <AboutTitleContent>
            <ContentTitle>Who Are We</ContentTitle>
          </AboutTitleContent>
          <AboutContentHeader>
            <HeaderTitle>
              We Provide the highest level of satisfaction care & services to
              our patients.
            </HeaderTitle>
          </AboutContentHeader>
          <AboutContent>
            <ContentSubText>
              Grabbo Fertility Clinic is ready and able to care for your little
              ones. With staff members who are certified in pediatric life
              support, we’re experienced in treating children from infancy
              through young adulthood. The Grabbo Fertility Clinic Gwarinpa is
              an extraordinary achievement in clinical fertility care.
            </ContentSubText>
            <ContentSubText>
              The three-story reproductive center is 13,700 square feet and will
              offer our patients the latest fertility technology and patient
              comfort. With a larger, more advanced clinic, GFC will be able to
              help even more people with infertility or reproductive
              difficulties who dream of starting a family.
            </ContentSubText>
          </AboutContent>
        </AboutWrapper>{" "}
      </AboutTopWrapper>
      <GrabboShowCase>
        <MainOverlay />
        <ShowcaseWrapper>
          <ShowCaseText>
            We’re Setting The New Standards In Health Sector
          </ShowCaseText>
          <ShowcaseSubText>
            At Grabbo, our commitment to excellence is unwavering. With
            state-of-the-art facilities nestled in the heart of the community,
            we provide cutting-edge medical care without losing the personal
            touch that makes all the difference.
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
    </WeContainer>
  )
}
const WeContainer = styled.div`
  min-height: 1000px;
  margin: 120px 0;
  background: ${grabboColors.black};
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const AboutWrapper = twc.div`
flex flex-col
max-w-[1320px]
mx-auto my-10 w-full


`

const AboutTopWrapper = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 88px 16px 120px 16px;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/images/marker.svg") repeat center center/cover;
`

const AboutTitleContent = twc.div`
max-w-[170px]
flex items-center justify-center

mb-8 text-black py-2 px-5 rounded-full border border-white bg-white
`
const AboutContentHeader = twc.div`
max-w-[1320px]
my-3

`
const HeaderTitle = twc(MainGrabboHeader4)`
text-white
w-full max-w-[950px]
`

const AboutContent = twc.div`
flex
lg:flex-row flex-col gap-10
mt-10
`

const ContentTitle = twc(GrabboHeader7Medium)`
text-black
`
const ContentSubText = twc(GrabboHeader6)`
text-neutral-300

`
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

export default AboutWeAre
