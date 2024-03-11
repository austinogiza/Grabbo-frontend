"use client"
import { GrabboHeader3, GrabboHeaderCaption } from "@/styles/TextStyles"
import SiteDivider from "@/utils/SiteDivider"
import { ArrowRight } from "iconsax-react"
import { twc } from "react-twc"
import styled from "styled-components"

const AboutHero = () => {
  return (
    <AboutHeroContainer className="bg-white py-10 sm:py-24 mt-10 ">
      <div className=" flex flex-col items-start justify-center max-w-[1328px]  mx-auto">
        <div className="max-w-[1328px]">
          <div className=" items-start flex flex-col">
            {" "}
            <AboutHeroTitle>
              Grabbo Fertility Clinic & Diagnostics Centre
            </AboutHeroTitle>
            <AboutMainText className="text-left mt-2 ">
              Grabbo Fertility Clinic® is a world-class fertility center in
              Gwarimpa Abuja. With more than 10 years of collective reproductive
              clinic experience diagnosing and treating infertility, GFC is a
              leading provider of IVF and fertility care in the Nigeria.
            </AboutMainText>
          </div>
        </div>
        <div className="relative overflow-hidden  mt-20 ">
          <MainOverlay />
          <div className="mx-auto max-w-7xl  ">
            <img
              className="rounded-xl "
              src="/images/abouthero.webp"
              alt="grabbo about us hero"
            />
          </div>
        </div>
      </div>
    </AboutHeroContainer>
  )
}
const MainOverlay = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.24);
  top: 0;
  left: 0;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
`

const AboutHeroContainer = styled.div`
  background: url("/images/backgroundpattern.webp") no-repeat center
    center/contain;
`

const AboutSubText = twc(GrabboHeaderCaption)`
bg-white rounded-full px-3 py-1
`

const AboutSubTextRow = twc(GrabboHeaderCaption)`
flex flex-row items-center justify-center gap-2
bg-primary-50 text-primary-800  rounded-full
px-2 py-1
border-2 border-strokeColor
mb-2

`
const AboutHeroTitle = twc(GrabboHeader3)`
 max-w-[750px]
`
const AboutMainText = twc.div`
text-neutral-400
 max-w-[950px]
`
const AboutArrow = twc(ArrowRight)`
 w-5 h-5 text-primary-800 `
export default AboutHero
