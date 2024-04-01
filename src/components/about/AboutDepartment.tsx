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
            Empowering Your Healthcare Journey
          </DepartmentSubText>
          <SectionTitle>
            Comprehensive Healthcare: Diagnostics Alongside World-Class
            Fertility Care
          </SectionTitle>
          <SectionSubText>
            Our dedicated Diagnostics Department offers a comprehensive suite of
            diagnostic services to support your overall health. Learn more about
            our hospital departments.
          </SectionSubText>{" "}
          <div className="max-w-[280px]">
            {" "}
            <GhostLinkButton
              href="department"
              title="Checkout our departments"
            />
          </div>
        </div>
      </div>{" "}
      <div className="lg:my-20 my-10">
        {" "}
        <InfiniteMovingCards />
      </div>
    </div>
  )
}
const SectionTitle = twc(GrabboHeader4)`
lg:mb-4 mb-2
max-w-[850px]
`
const SectionSubText = twc(GrabboHeaderCaptionLargeRegular)`
text-neutral-500
`
const DepartmentSubText = twc(GrabboHeaderCaption)`
text-neutral-400

`

export default AboutDepartment
