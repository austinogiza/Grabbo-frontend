"use client"

import { PrimaryButton } from "@/styles/ButtonStyles"
import { grabboColors } from "@/styles/ColorStyles"
import {
  GrabboHeader5,
  GrabboHeader7Medium,
  GrabboHeaderCaption25Large,
} from "@/styles/TextStyles"
import { ArrowRight } from "iconsax-react"
import React, { FC } from "react"
import { twc } from "react-twc"
import styled from "styled-components"

interface SupportBoxProps {
  title?: string
  description?: string
  icon?: string
  image?: string
}
const ExperiencingSpecialty: FC<SupportBoxProps> = (props) => {
  const { title, description, image, icon } = props
  return (
    <>
      {" "}
      <DelaInfoWrapper>
        <InfoContentRow>
          <div className="mb-3">
            <UltimateButtonWrapper>
              <InterestIcon src={icon} alt={`Grabbo ${title}`} />
            </UltimateButtonWrapper>
          </div>
          <UltimateInfoTitle>{title}</UltimateInfoTitle>
          <UltimateInfoSubText>{description}</UltimateInfoSubText>{" "}
        </InfoContentRow>
        <div>
          <ImageWrapperBox>
            <MainOverlay />
            <InterestImage src={image} alt={`Grabbo ${title}`} />
          </ImageWrapperBox>
        </div>
      </DelaInfoWrapper>
    </>
  )
}
const ImageWrapperBox = twc.div`

  relative h-[220px]
`
const InterestImage = twc.img``

const UltimateButtonWrapper = twc.div`
items-center justify-center flex w-10 h-10  rounded-[10px]
bg-primary-500
mb-2
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
const InterestIcon = twc.img`
 w-6 h-6
`
const DelaInfoWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 450px;
  background: ${grabboColors.snowWhite};

  min-height: 360px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease-in;
`

const InfoContentRow = styled.div`
  padding: 24px 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (max-width: 750px) {
    padding: 24px 16px;
  }
`
const UltimateInfoTitle = twc(GrabboHeader7Medium)`
text-black
text-left
`
const UltimateInfoSubText = twc(GrabboHeaderCaption25Large)`
mt-2
text-neutral-600
text-left
`

const SectionButtonCover = styled.div`
  width: 100%;
  margin: 24px auto 32px 0;
  max-width: 320px;
`
const SectionButton = styled(PrimaryButton)``
const ButtonArrowIcon = twc(ArrowRight)`
w-7 h-7
text-white ml-3 group-hover:text-black
`

export default ExperiencingSpecialty
