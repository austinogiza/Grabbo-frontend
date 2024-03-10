"use client"
import { GrabboBody1, GrabboHeader2Medium } from "@/styles/TextStyles"
import React from "react"
import { twc } from "react-twc"

const AboutWeAre = () => {
  return (
    <>
      <AboutWrapper>
        <AboutTitleContent>
          <ContentTitle>Who Are We</ContentTitle>
        </AboutTitleContent>
        <AboutContent>
          <ContentSubText>
            Grabbo Fertility Clinic is ready and able to care for your little
            ones. With staff members who are certified in pediatric life
            support, we’re experienced in treating children from infancy through
            young adulthood. The Grabbo Fertility Clinic Gwarinpa is an
            extraordinary achievement in clinical fertility care.
          </ContentSubText>
        </AboutContent>
        <AboutContent>
          <ContentSubText>
            The three-story reproductive center is 13,700 square feet and will
            offer our patients the latest fertility technology and patient
            comfort. With a larger, more advanced clinic, GFC will be able to
            help even more people with infertility or reproductive difficulties
            who dream of starting a family.
          </ContentSubText>
        </AboutContent>
      </AboutWrapper>
    </>
  )
}
const AboutWrapper = twc.div`
w-full gap-3
p-2
min-h-[450px]
flex flex-row items-center max-w-[1320px] mx-auto

`
const AboutTitleContent = twc.div`

max-w-[450px] w-full mx-auto
`

const AboutContent = twc.div`

max-w-[380px] w-full mx-auto
`

const ContentTitle = twc(GrabboHeader2Medium)`
text-black
`
const ContentSubText = twc(GrabboBody1)`
text-neutral-500
`

export default AboutWeAre
