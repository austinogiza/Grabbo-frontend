"use client"
import { GrabboHeader4, GrabboHeaderCaptionLarge } from "@/styles/TextStyles"
import React from "react"
import { twc } from "react-twc"

const AboutDepartment = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center min-h-[850px]">
      <div className="max-w-[1320px] w-full flex items-center justify-center">
        <div className="container">
          <div className="mb-14 label">Driving happiness with carsova</div>
          <div className="flex justify-between items-end mb-25 xl:items-start xl:mb-20 lg:block">
            <div className="max-w-[38rem] mr-10 text-h1 lg:mb-8">
              Capture your moment with carsova electric vehicle
            </div>
            <div className="shrink-0 w-[29.5rem] text-g-100 lg:w-full">
              Carsova Electric Vehicles, every journey is an adventure worth
              capturing, and this gallery is a place to share excitement and
              inspiration with the electric car enthusiast community
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
const SectionTitle = twc(GrabboHeader4)`
lg:mb-10 mb-2
`
const SectionSubText = twc(GrabboHeaderCaptionLarge)`
text-neutral-500
`
export default AboutDepartment
