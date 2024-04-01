"use client"

import { GrabboHeader6, GrabboHeaderCaptionRegular } from "@/styles/TextStyles"
import React, { FC } from "react"
import { twc } from "react-twc"
import styled from "styled-components"
interface TeamCardProps {
  name?: string
  photo?: string
  position?: string
}
const TeamCard: FC<TeamCardProps> = (props) => {
  const { name, photo, position } = props
  return (
    <div>
      {" "}
      <li>
        <div className="aspect-[14/13] w-full rounded-2xl relative">
          <MainOverlay />
          <img
            className="aspect-[14/13] w-full rounded-2xl object-cover"
            src={photo}
            alt=""
          />
        </div>
        <div className="mt-4">
          <UltimateInfoTitle>{name}</UltimateInfoTitle>
          <UltimateInfoSubText>{position}</UltimateInfoSubText>
        </div>
      </li>
    </div>
  )
}
const UltimateInfoTitle = twc(GrabboHeader6)`
text-white
lg:text-left text-center
`
const UltimateInfoSubText = twc(GrabboHeaderCaptionRegular)`
mt-2
text-white
lg:text-left text-center
`
const MainOverlay = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.24);
  top: 0;
  left: 0;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
`
export default TeamCard
