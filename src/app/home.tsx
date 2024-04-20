"use client"

import AboutDepartment from "@/components/about/AboutDepartment"
import HomeFeatures from "@/components/home/HomeFeatures"
import HomeFertility from "@/components/home/HomeFertility"
import HomeHero from "@/components/home/HomeHero"
import HomeLegacy from "@/components/home/HomeLegacy"
import HomeOurTeam from "@/components/home/HomeOurTeam"
import HomeSpecialty from "@/components/home/HomeSpecialty"
import HomeStaffs from "@/components/home/HomeStaffs"
import HomeTreatment from "@/components/home/HomeTreatment"
import HomeWorldClass from "@/components/home/HomeWorldClass"
import React from "react"

const HomePage = () => {
  return (
    <>
      {" "}
      <HomeHero />
      <HomeFeatures />
      <HomeWorldClass />
      <HomeFertility />
      <HomeTreatment />
      <HomeSpecialty />
      <HomeOurTeam />
      <HomeLegacy />
      <AboutDepartment />
      <HomeStaffs />
    </>
  )
}

export default HomePage
