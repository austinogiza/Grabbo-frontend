import AboutDepartment from "@/components/about/AboutDepartment"
import HomeComfort from "@/components/home/HomeComfort"
import HomeFeatures from "@/components/home/HomeFeatures"
import HomeFertility from "@/components/home/HomeFertility"
import HomeGoal from "@/components/home/HomeGoal"
import HomeHealth from "@/components/home/HomeHealth"
import HomeHero from "@/components/home/HomeHero"
import HomeOurTeam from "@/components/home/HomeOurTeam"
import React from "react"

const HomePage = () => {
  return (
    <>
      {" "}
      <HomeHero />
      <HomeHealth />
      <HomeFeatures />
      <HomeComfort />
      <HomeFertility />
      <AboutDepartment />
      <HomeOurTeam />
      <HomeGoal />
    </>
  )
}

export default HomePage
