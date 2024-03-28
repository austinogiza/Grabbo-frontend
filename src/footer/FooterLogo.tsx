import Link from "next/link"
import React from "react"
import { twc } from "react-twc"

const FooterLogo = () => {
  return (
    <div className="max-w-[80px] mx-auto my-10 flex items-center justify-center">
      <GrabboLink href="/">
        <LogoImage src="/images/grabbologo.png" />
      </GrabboLink>
    </div>
  )
}

const LogoImage = twc.img`
object-cover w-full max-w-[64px] min-h-[44px]
flex items-center justify-center
cursor-pointer
`
const GrabboLink = twc(Link)`
object-cover w-full max-w-[64px] min-h-[44px]
flex items-center justify-center
`

export default FooterLogo
