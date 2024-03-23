import React from "react"
import About from "./about"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `About | ${siteConfig.title}`,
  description: siteConfig.description,
}

const page = () => {
  return (
    <>
      <About />
    </>
  )
}

export default page
