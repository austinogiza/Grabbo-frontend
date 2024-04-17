"use client"
import { GrabboLargeBody, MainGrabboHeader4 } from "@/styles/TextStyles"
import React from "react"
import { allTeams } from "contentlayer/generated"
import { twc } from "react-twc"
import TeamCard from "./TeamCard"
import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"
import SecondaryContactButton from "@/styles/button-container/SecondaryContactButton"
import styled from "styled-components"

const HomeOurTeam = () => {
  return (
    <div className="bg-black ">
      <SectionTopWrapper className="mx-auto  max-w-[1180px] mt-20">
        <div className="mt-20 max-w-[750px]">
          <HomeInfoTitle>Our team</HomeInfoTitle>
          <HomeInfoSubTitle>
            Our dedicated team ensures that here, {"you're"} not just a patient;
            {"you're"} part of a community dedicated to helping you achieve your
            dreams of parenthood.
          </HomeInfoSubTitle>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 "
        >
          {allTeams.map((person, index) => (
            <>
              <TeamCard
                key={index}
                name={person.name}
                position={person.position}
                photo={person.image}
              />
            </>
          ))}
        </ul>
        <div className="lg:max-w-[450px]  max-w-[750px] w-full mt-20 mx-auto flex lg:flex-row flex-col gap-3">
          <PrimaryLinkButton href="contact" title="Book an Appointment" />{" "}
          <SecondaryContactButton />
        </div>
      </SectionTopWrapper>
    </div>
  )
}
const SectionTopWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 88px 16px;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: url("/images/marker.svg") repeat center center/contain;
  @media only screen and (max-width: 800px) {
    padding: 24px 16px;
  }
`
const HomeInfoTitle = twc(MainGrabboHeader4)`
text-white
`
const HomeInfoSubTitle = twc(GrabboLargeBody)`
text-neutral-200
mt-2
`
export default HomeOurTeam
