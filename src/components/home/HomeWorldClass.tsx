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
        {" "}
        <ValuesInfoSubTitle>
          Take the first step towards building your family today.
        </ValuesInfoSubTitle>
        <ValuesInfoTitle>
          We take immense pride in our outstanding IVF success rates
        </ValuesInfoTitle>{" "}
        <UltimateInfoSubText>
          {" "}
          Discover how Grabbo can help make your dreams of parenthood a reality
          with our world-class fertility services, exceptional IVF success
          rates, and affordable, compassionate care.
        </UltimateInfoSubText>
        <div className="max-w-[280px] w-full mx-auto">
          {" "}
          <GhostLinkButton href="contact" title="Get in touch with us" />
        </div>
      </div>
    </WorldClassContainer>
  )
}

const WorldClassContainer = styled.div`
  background: url("/images/worldclass.webp") no-repeat center center/cover;
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
text-neutral-100 my-1
max-w-[950px]
border border-primary-500 rounded-full px-3 py-2
`
const MainOverlay = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.34);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
  border-radius: inherit;
`

export default HomeWorldClass
