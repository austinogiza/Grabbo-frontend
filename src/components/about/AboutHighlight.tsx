"use client"
import { SectorData, ValuesData } from "@/data/ValuesData"
import { PrimaryButton } from "@/styles/ButtonStyles"
import {
  GrabboHeader4,
  GrabboHeader7,
  GrabboHeaderCaption,
  GrabboHeaderCaptionLargeRegular,
} from "@/styles/TextStyles"
import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"
import SiteOverlay from "@/utils/SiteOverlay"
import { TickCircle } from "iconsax-react"
import Image from "next/image"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const AboutHighlight = () => {
  return (
    <div className="min-h-[750px] max-w-[1180px] mx-auto items-center flex justify-center lg:my-20 my-10">
      <AboutHighlightContainer>
        <ValuesInfoRow className="w-full">
          <ValuesText>Comprehensive Diagnostic Services</ValuesText>
          <ValuesInfoTitle>
            Our diagnostic center offers a wide range of advanced services.
          </ValuesInfoTitle>

          <ValuesInfoSubTitle>
            Our hospital is equipped with the latest diagnostic tools and
            cutting-edge technologies, allowing us to create personalized
            treatment plans that optimize your chances of success.. We are
            committed to staying at the forefront of reproductive medicine.
          </ValuesInfoSubTitle>

          <div className="max-w-[280px] w-full">
            <PrimaryLinkButton title="Book an Appointment" href="contact" />
          </div>
        </ValuesInfoRow>
        <ValueContainer className="flex lg:flex-row flex-col gap-10 w-full">
          <MainOverlay />
          <ValueWrapperIcon src="/images/comprehensive.webp" alt="" />
        </ValueContainer>
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
max-w-[650px]
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
  background: rgba(0, 0, 0, 0.04);
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

export default AboutHighlight
