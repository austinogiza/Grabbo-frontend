"use client"
import {
  GrabboHeader2Medium,
  GrabboHeader3,
  GrabboHeader4,
  GrabboHeader6,
  GrabboHeaderCaption25Large,
} from "@/styles/TextStyles"
import GhostLinkButton from "@/styles/button-container/GhostLinkButton"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const HomeWorldClass = () => {
  return (
    <WorldClassContainer className="w-full items-center justify-center flex min-h-[850px] relative">
      <MainOverlay />
      <div className="max-w-[1180px] mx-auto my-20 flex flex-col items-center justify-center relative z-[10]">
        <ValuesInfoSubTitle>
          Take the first step towards building your family today.
        </ValuesInfoSubTitle>
        <ValuesInfoTitle>
          We take immense pride in our outstanding IVF success rates
        </ValuesInfoTitle>
        <UltimateInfoSubText>
          At Grabbo we help couples and people make your dreams of parenthood a
          reality with our high success rate fertility services, exceptional IVF
          success rates, which we ensure it is very affordable.
        </UltimateInfoSubText>
        <div className="max-w-[340px] w-full mx-auto">
          <GhostLinkButton href="contact" title="Book an Appointment" />
        </div>
      </div>
    </WorldClassContainer>
  )
}

const WorldClassContainer = styled.div`
  background: url("/images/towards.webp") no-repeat center center/cover;
`
const ValuesInfoTitle = twc(GrabboHeader3)`
mb-2 lg:mb-4
max-w-[850px]
text-white
text-center
`
const UltimateInfoSubText = twc(GrabboHeader6)`
text-neutral-50
text-center
max-w-[650px]
`
const ValuesInfoSubTitle = twc(GrabboHeader6)`
text-primary-50 my-1
max-w-[950px]
border border-primary-500 rounded-full px-3 py-2
`
const MainOverlay = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.54);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
  border-radius: inherit;
`

export default HomeWorldClass
