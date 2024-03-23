"use client"
import { SectorData, ValuesData } from "@/data/ValuesData"
import {
  GrabboHeader4,
  GrabboHeader7,
  GrabboHeaderCaption,
  GrabboHeaderCaptionLargeRegular,
} from "@/styles/TextStyles"
import { TickCircle } from "iconsax-react"
import Image from "next/image"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const AboutValues = () => {
  return (
    <div className="min-h-[750px] items-center flex justify-center">
      <div className="max-w-[1320px] mx-auto w-full glex flex-col items-center justify-center lg:px-0 px-4">
        {" "}
        <div className="flex lg:flex-row flex-col gap-10 ">
          <ValuesInfoRow className="w-full max-w-[550px]  mx-auto min-h-[450px] ">
            <ValuesInfoTitle>Statement of Values</ValuesInfoTitle>
            <ValuesInfoSubTitle>
              GFC key values are created by Grabbo Fertility Clinic employees to
              establish a shared understanding of how we relate to our patients
              and to the community. Together, these seven values form the basis
              of our what we do,who we are strategic goals and guide our actions
              under our code of ethical conduct:
            </ValuesInfoSubTitle>
            <ValuesWrapper>
              {ValuesData.map((data, index: number) => (
                <ValueContainer key={index}>
                  <ValueWrapperIcon>
                    <ValuesIcon />
                  </ValueWrapperIcon>
                  <ValuesText>{data?.title}</ValuesText>{" "}
                </ValueContainer>
              ))}
            </ValuesWrapper>
          </ValuesInfoRow>
          <div className="items-center justify-center flex relative max-w-[500px] w-full mx-auto min-h-[450px]">
            <MainOverlay />
            <img
              className="max-w-[500px] w-full mx-auto min-h-[450px] items-center justify-center flex "
              src="/images/grabbofamily.webp"
              alt="grabbo values"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 max-w-[1320px] w-full mx-auto"></div>
      </div>
    </div>
  )
}
const ValuesText = twc(GrabboHeaderCaption)``
const ValuesInfoRow = twc.div`
flex flex-col
`
const ValuesInfoTitle = twc(GrabboHeader4)``
const ValuesInfoSubTitle = twc(GrabboHeaderCaptionLargeRegular)`
text-neutral-400 my-3
`
const ValueWrapperIcon = twc.div`
h-8 w-8 rounded-full bg-primary-50 flex justify-center items-center
mr-2
`
const ValuesWrapper = twc.div`
flex flex-col
`

const ValueContainer = twc.div`
rounded-full flex justify-start items-center
mr-2
w-full flex flex-row
my-3
`
const ValuesIcon = twc(TickCircle)`
w-5 h-5 text-primary-600
`
const MainOverlay = styled.div`
  position: absolute;
  border-radius: 0px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.24);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
`
export default AboutValues
