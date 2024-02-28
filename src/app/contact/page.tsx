import React from "react"
import ContactSection from "./contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact us.",
  //   description: "...",
}

const page = () => {
  return (
    <>
      <ContactSection />
    </>
  )
}

export default page
