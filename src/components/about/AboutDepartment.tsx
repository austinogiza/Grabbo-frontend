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
import { GhostButton } from "@/styles/ButtonStyles"

const AboutDepartment = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-10 lg:my-20 min-h-[850px]">
      <div className="max-w-[1320px] w-full flex items-center justify-start">
        <div className="max-w-[750px]">
          <DepartmentSubText className="mb-4 label">
            Driving happiness with carsova
          </DepartmentSubText>
          <SectionTitle>
            Capture your moment with carsova electric vehicle
          </SectionTitle>
          <SectionSubText>
            Carsova Electric Vehicles, every journey is an adventure worth
            capturing, and this gallery is a place to share excitement and
            inspiration with the electric car enthusiast community
          </SectionSubText>{" "}
          <ButtonMessageWrapper>
            <MessageButton href="/">View departments</MessageButton>
          </ButtonMessageWrapper>
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
max-w-[500px]
`
const SectionSubText = twc(GrabboHeaderCaptionLargeRegular)`
text-neutral-500
`
const DepartmentSubText = twc(GrabboHeaderCaption)`
text-neutral-400

`
const ButtonMessageWrapper = twc.div`
mt-10
w-full
max-w-[450px]

flex flex-row gap-4
`
const MessageButton = twc(GhostButton)`
w-full
`
export default AboutDepartment
