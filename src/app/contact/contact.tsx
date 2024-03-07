"use client"
import ContactContent from "@/components/contact/ContactContent"
import ContactHero from "@/components/contact/ContactHero"
import { ContactData } from "@/data/ContactData"
import React from "react"
import { twc } from "react-twc"

const ContactSection = () => {
  return (
    <>
      <ContactContainer>
        <ContactHero />
        <ContactContent />
      </ContactContainer>
    </>
  )
}
const ContactContainer = twc.div`
flex flex-col
`

export default ContactSection
