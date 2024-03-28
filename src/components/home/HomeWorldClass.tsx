"use client"
import {
  GrabboHeader2Medium,
  GrabboHeader3,
  GrabboHeader4,
  GrabboHeader6,
} from "@/styles/TextStyles"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const HomeWorldClass = () => {
  return (
    <WorldClassContainer className="w-full items-center justify-center flex min-h-[850px] relative">
      <MainOverlay />
      <div className="max-w-[1320px] mx-auto my-20 flex flex-col items-center justify-center relative z-[10]">
        {" "}
        <ValuesInfoSubTitle>
          Welcome To The World Class IVF Center In Nigeria
        </ValuesInfoSubTitle>
        <ValuesInfoTitle>
          Nigeria’s Number 1<br /> World Class IVF Center
        </ValuesInfoTitle>{" "}
      </div>
    </WorldClassContainer>
  )
}

const WorldClassContainer = styled.div`
  background: url("/images/grabboworldclass.webp") no-repeat center center/cover;
`
const ValuesInfoTitle = twc(GrabboHeader3)`
mb-2 lg:mb-4
max-w-[650px]
text-white
text-center
`
const ValuesInfoSubTitle = twc(GrabboHeader6)`
text-neutral-100 my-1
max-w-[950px]
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
