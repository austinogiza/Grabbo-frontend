import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"
import React from "react"
import { twc } from "react-twc"

const NavbarButtons = () => {
  return (
    <div className="max-w-[210px] mt-[-24px] w-full items-center justify-center flex">
      <SiteBookButton href="contact" title="Book an Appointment" />
    </div>
  )
}
const SiteBookButton = twc(PrimaryLinkButton)``

export default NavbarButtons
