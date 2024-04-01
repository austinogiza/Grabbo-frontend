"use client"
import { FeaturesData } from "@/data/FeaturesData"

import React from "react"
import FeaturesCard from "./containers/FeaturesCard"
import { twc } from "react-twc"
import {
  GrabboHeader4,
  GrabboHeaderCaption,
  GrabboHeaderCaptionLargeRegular,
} from "@/styles/TextStyles"
import styled from "styled-components"
import GhostLinkButton from "@/styles/button-container/GhostLinkButton"

const HomeFeatures = () => {
  return (
    <div className="bg-black ">
      <SectionTopWrapper className="mx-auto">
        <FeaturesContentRow>
          <DepartmentSubText>
            Our General And Specialized Services
          </DepartmentSubText>
          <SectionTitle>
            Welcome To The <br />
            World Class IVF Center In Nigeria
          </SectionTitle>
          <SectionSubText>
            The leading IVF clinic and diagnostic center in Nigeria. We are at
            the forefront of reproductive health, offering innovative treatments
            and comprehensive care in a compassionate, supportive environment.
          </SectionSubText>
        </FeaturesContentRow>{" "}
        <div className="mx-auto  max-w-[1180px]  px-6 lg:my-24 my-16 lg:px-8">
          <dl className="mx-auto grid max-w-[1180px] grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {FeaturesData.map((feature, index: number) => (
              <FeaturesCard
                key={index}
                name={feature.name}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </dl>
        </div>
        <div className="max-w-[280px] w-full mx-auto">
          {" "}
          <GhostLinkButton href="about" title="Learn more about us" />
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto ">
            <img
              src="/images/diagnostic.webp"
              alt="Grabbo Welcome"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-950 pt-[7%]" />
            </div>
          </div>
        </div>
      </SectionTopWrapper>
    </div>
  )
}

const FeaturesContentRow = twc.div`
max-w-[850px]
flex flex-col
w-full mx-auto
`
const SectionTitle = twc(GrabboHeader4)`
lg:mb-4 mb-2
text-white text-center

`
const SectionTopWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 64px 16px 0 16px;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("/images/marker.svg") repeat center center/contain;
  @media only screen and (max-width: 800px) {
    padding: 24px 16px 0 16px;
  }
`
const SectionSubText = twc(GrabboHeaderCaptionLargeRegular)`
text-neutral-200
mt-2
text-center
`
const DepartmentSubText = twc(GrabboHeaderCaption)`
max-w-[320px] mx-auto text-primary-200  rounded-full px-4 py-2 border-[1px] border-primary-200 mb-10

`
export default HomeFeatures
