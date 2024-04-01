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
    <NavbarContainer>
      <NavbarItem>
        <Link href={`${href}`}>{title}</Link>
      </NavbarItem>
    </NavbarContainer>
  )
}

const NavbarContainer = twc.div`
text-white duration-300 transition-all bg-transparent px-4 py-1 rounded-full cursor-pointer
hover:bg-white hover:text-primary-600 group
`
const NavbarItem = twc.div`
text-white group-hover:text-primary-600
`
export default NavbarColumn
