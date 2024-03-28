import Link from "next/link"
import React, { FC } from "react"
import { twc } from "react-twc"
interface NavbarColumnProps {
  title?: any

  href?: string
}
const NavbarColumn: FC<NavbarColumnProps> = (props) => {
  const { title, href } = props
  return (
    <NavbarContainer className="">
      <NavbarItem>
        <Link href={`${href}`}>{title}</Link>
      </NavbarItem>
    </NavbarContainer>
  )
}

const NavbarContainer = twc.div``
const NavbarItem = twc.div``
export default NavbarColumn
