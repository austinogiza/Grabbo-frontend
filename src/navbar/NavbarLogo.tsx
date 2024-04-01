import Link from "next/link"
import React from "react"
import { twc } from "react-twc"

const NavbarLogo = () => {
  return (
    <div className="max-w-[96px] mx-auto my-10 flex items-center justify-center">
      <GrabboLink href="/">
        <LogoImage src="/images/grabbonavlogo.png" />
      </GrabboLink>
    </div>
  )
}

const LogoImage = twc.img`
object-contain w-full max-w-[144px] min-h-[56px]
flex items-center justify-center
cursor-pointer
`
const GrabboLink = twc(Link)`
object-cover w-full max-w-[144px] min-h-[56px]
flex items-center justify-center
`

export default NavbarLogo
