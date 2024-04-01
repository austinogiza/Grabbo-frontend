"use client"
import { GrabboHeader4, GrabboHeaderCaption25Large } from "@/styles/TextStyles"
import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"
import SecondaryContactButton from "@/styles/button-container/SecondaryContactButton"
import React from "react"
import { twc } from "react-twc"
import HomeInnovation from "./HomeInnovation"
import styled from "styled-components"

const HomeLegacy = () => {
  return (
    <div className="min-h-[650px] max-w-[1180px] mx-auto w-full flex items-center justify-center">
      <div className="flex flex-col lg:my-40 my-20">
        {" "}
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-between w-full gap-4">
          <div className="items-center justify-center max-w-[550px]">
            <UltimateInfoTitle>
              Affordable Fertility Solutions
            </UltimateInfoTitle>
            <UltimateInfoSubText>
              {" "}
              At Grabbo, we believe that cost should never be a barrier to
              building a family. That's why we offer transparent pricing and
              flexible financing options to make our world-class fertility
              services accessible to all.
            </UltimateInfoSubText>
            <div className="lg:max-w-[450px] max-w-[750px] w-full lg:mx-0 mx-auto flex lg:flex-row flex-col gap-3">
              <PrimaryLinkButton href="contact" title="Book an appointment" />{" "}
              <SecondaryContactButton />
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end lg:contents">
            <div className="w-0 flex-auto relative lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <MainOverlay />
              <img
                src="/images/service.webp"
                alt=""
                className="aspect-[7/5] w-[40rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
        <HomeInnovation />
      </div>
    </div>
  )
}
const UltimateInfoTitle = twc(GrabboHeader4)`
text-black
lg:text-left text-center
`
const UltimateInfoSubText = twc(GrabboHeaderCaption25Large)`
mt-2
text-neutral-500
lg:text-left text-center
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
  border-radius: 16px;
`
export default HomeLegacy
