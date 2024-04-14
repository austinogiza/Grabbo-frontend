"use client"
import {
  GrabboHeader4,
  GrabboHeaderCaption,
  GrabboHeaderCaptionLarge,
  GrabboHeaderCaptionLargeRegular,
} from "@/styles/TextStyles"
import React from "react"
import { twc } from "react-twc"
import InfiniteMovingCards from "../animation/InfiniteMovingCards"
import GhostLinkButton from "@/styles/button-container/GhostLinkButton"

const AboutDepartment = () => {
  return (
    <div className="w-full flex relative flex-col items-center overflow-hidden justify-center my-10 lg:my-20 min-h-[850px]">
      <div className="max-w-[1180px] w-full flex items-center justify-start px-6">
        <div className="max-w-[750px]">
          <DepartmentSubText className="mb-4 label">
            Explore Our Departments
          </DepartmentSubText>
          <SectionTitle>
            Committed to providing exceptional healthcare services.
          </SectionTitle>
          <SectionSubText>
            {"Grabbo's"} world-class fertility clinic is dedicated to helping
            you achieve your dream of parenthood. Our renowned team of
            reproductive endocrinologists, embryologists, and support staff
            provide personalized fertility solutions tailored to your unique
            needs.
          </SectionSubText>
          <div className="max-w-[280px]">
            <GhostLinkButton
              href="department"
              title="Checkout our departments"
            />
          </div>
        </div>
      </div>
      <div className="lg:my-20 my-10 w-full">
        <InfiniteMovingCards />
      </div>
    </div>
  )
}
const SectionTitle = twc(GrabboHeader4)`
lg:mb-4 mb-2
max-w-[580px]
`
const SectionSubText = twc(GrabboHeaderCaptionLargeRegular)`
text-neutral-500
`
const DepartmentSubText = twc(GrabboHeaderCaption)`
text-primary-600
w-full max-w-[200px]
bg-primary-50 rounded-full border border-primary-600 items-center justify-center px-3 py-2
`

export default AboutDepartment
