"use client"
import { GrabboHeader3, GrabboHeaderCaption } from "@/styles/TextStyles"
import { ArrowRight } from "iconsax-react"
import { twc } from "react-twc"
import styled from "styled-components"

const DepartmentHero = () => {
  return (
    <DepartmentHeroContainer className="bg-white py-24 sm:py-32">
      <div className=" flex flex-col items-center justify-center max-w-[750px] mx-auto">
        <DepartmentSubTextRow>
          {" "}
          <DepartmentSubText className="text-base font-semibold leading-7">
            Grabbo
          </DepartmentSubText>
          Our Department
          <DepartmentArrow />
        </DepartmentSubTextRow>
        <DepartmentHeroTitle>Our medical departments</DepartmentHeroTitle>
        <DepartmentMainText className="text-center mt-2 ">
          At Grabbo we are dedicated to providing exceptional healthcare
          services across a wide range of medical fields. Discover the
          comprehensive care we offer through our specialized departments.
        </DepartmentMainText>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20 mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="/images/staff02.webp"
            alt=""
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0  from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </DepartmentHeroContainer>
  )
}

const DepartmentHeroContainer = styled.div`
  background: url("/images/backgroundpattern.webp") no-repeat center
    center/contain;
`

const DepartmentSubText = twc(GrabboHeaderCaption)`
bg-white rounded-full px-3 py-1
`

const DepartmentSubTextRow = twc(GrabboHeaderCaption)`
flex flex-row items-center justify-center gap-2
bg-primary-50 text-primary-800  rounded-full
px-2 py-1
border-2 border-strokeColor
mb-2

`
const DepartmentHeroTitle = twc(GrabboHeader3)``
const DepartmentMainText = twc.div`
text-neutral-400
`
const DepartmentArrow = twc(ArrowRight)`
 w-5 h-5 text-primary-800 `
export default DepartmentHero
