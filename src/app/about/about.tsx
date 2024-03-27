import AboutDepartment from "@/components/about/AboutDepartment"
import AboutExpectation from "@/components/about/AboutExpectation"
import AboutHero from "@/components/about/AboutHero"
import AboutValues from "@/components/about/AboutValues"
import AboutWeAre from "@/components/about/AboutWeAre"
import React from "react"

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutWeAre />

      <AboutExpectation />
      <AboutDepartment />
    </>
  )
}

export default About
