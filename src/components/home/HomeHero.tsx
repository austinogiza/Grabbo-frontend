"use client"
import { GrabboHeader2Medium, GrabboHeader6 } from "@/styles/TextStyles"
import React from "react"
import { twc } from "react-twc"
import styled from "styled-components"

const HomeHero = () => {
  return (
    <HomeContainer className="relative after:absolute after:inset-0 after:z-2 after:bg-gradient-to-b after:from-black/40 after:to-black/0 before:absolute before:inset-0 before:z-1 before:bg-radial-gradient before:opacity-40">
      <MainOverlay />
      <div className="max-w-[1180px] mx-auto relative z-[2] px-6">
        <div className="container relative z-3 flex items-end min-h-[750px] pb-24">
          <div className="flex flex-col mb-20">
            <ValuesInfoTitle>
              Your Health,Your Fertility, Our Mission
            </ValuesInfoTitle>{" "}
            <ValuesInfoSubTitle>
              Grabbo Fertility Clinic® is a world-class fertility center in
              Gwarimpa Abuja. With more than 10 years of collective reproductive
              clinic experience diagnosing and treating infertility, GFC is a
              leading provider of IVF and fertility care in the Nigeria.
            </ValuesInfoSubTitle>
          </div>
        </div>
      </div>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background: url("/images/general.webp") no-repeat center center/cover;
`

const ValuesInfoTitle = twc(GrabboHeader2Medium)`
mb-1 lg:mb-4
max-w-[850px]
text-white
`
const ValuesInfoSubTitle = twc(GrabboHeader6)`
text-white my-1
max-w-[950px]
`
const MainOverlay = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.24);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
  border-radius: inherit;
`
export default HomeHero
