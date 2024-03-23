import React from "react"
import ContactSection from "./contact"

import { siteConfig } from "@/config/site"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Contact us | ${siteConfig.title}`,
  description: siteConfig.description,
}

const page = () => {
  return (
    <>
      <ContactSection />
    </>
  )
}

export default page
