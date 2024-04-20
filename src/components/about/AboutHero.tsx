"use client"
import {
  GrabboHeader3,
  GrabboHeader7,
  GrabboHeaderCaption,
} from "@/styles/TextStyles"
import SiteImage from "@/utils/SiteImage"
import { ArrowRight } from "iconsax-react"
import { twc } from "react-twc"
import styled from "styled-components"

const AboutHero = () => {
  return (
    <AboutHeroContainer className="bg-white py-10 px-4 mt-28 lg:mt-40  ">
      <div className=" flex flex-col items-start justify-center max-w-[1180px]  mx-auto">
        <div className="max-w-[1180px]">
          <div className=" items-start flex flex-col">
            {" "}
            <AboutHeroTitle>
              Grabbo Fertility Clinic & Diagnostics Centre
            </AboutHeroTitle>
            <AboutMainText>
              Grabbo Fertility Clinic® is a world-class fertility center in
              Gwarimpa Abuja. With MainFAQDataore than 10 years of collective
              reproductive clinic experience diagnosing and treating
              infertility, GFC is a leading provider of IVF and fertility care
              in the Nigeria.
            </AboutMainText>
          </div>
        </div>
        <div className="relative overflow-hidden  lg:mt-20 mt-10 ">
          <MainOverlay />
          <div className="mx-auto max-w-7xl  ">
            <SiteImage
              className="rounded-xl w-full"
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

const AboutHeroTitle = twc(GrabboHeader3)`
 max-w-[750px]
`
const AboutMainText = twc(GrabboHeader7)`
text-neutral-400
 max-w-[1050px]
 text-left mt-2
`
const AboutArrow = twc(ArrowRight)`
 w-5 h-5 text-primary-800 `
export default AboutHero
