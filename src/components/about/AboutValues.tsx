"use client"
import { SectorData, ValuesData } from "@/data/ValuesData"
import {
  GrabboHeader4,
  GrabboHeader7,
  GrabboHeaderCaption,
} from "@/styles/TextStyles"
import { TickCircle } from "iconsax-react"
import Image from "next/image"
import React from "react"
import { twc } from "react-twc"

const AboutValues = () => {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto w-full glex flex-col items-center justify-center">
        {" "}
        <div className="">
          <ValuesInfoRow>
            <ValuesInfoTitle>Statement of Values</ValuesInfoTitle>
            <ValuesInfoSubTitle>
              GFC key values are created by Grabbo Fertility Clinic employees to
              establish a shared understanding of how we relate to our patients
              and to the community. Together, these seven values form the basis
              of our what we do,who we are strategic goals and guide our actions
              under our code of ethical conduct: –
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
          <div></div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3"></div>
      </div>
    </div>
  )
}
const ValuesText = twc(GrabboHeaderCaption)``
const ValuesInfoRow = twc.div`
flex flex-col
`
const ValuesInfoTitle = twc(GrabboHeader4)``
const ValuesInfoSubTitle = twc(GrabboHeader7)``
const ValueWrapperIcon = twc.div`
h-8 w-8 rounded-full bg-primary-50 flex justify-center items-center
mr-2
`
const ValuesWrapper = twc.div`
flex flex-col
`

const ValueContainer = twc.div`
rounded-fullflex justify-start items-center
mr-2
w-full flex flex-row
my-3
`
const ValuesIcon = twc(TickCircle)`
w-6 h-6 text-primary-600
`
export default AboutValues
