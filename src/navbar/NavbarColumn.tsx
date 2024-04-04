import { GrabboHeaderCaption } from "@/styles/TextStyles"
import { cn } from "@/utils/cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { FC } from "react"
import { twc } from "react-twc"
interface NavbarColumnProps {
  title?: any

  href?: string
}
const NavbarColumn: FC<NavbarColumnProps> = (props) => {
  const { title, href } = props
  const pathname = usePathname()
  const isDark =
    pathname === "/about" || pathname === "/department" || pathname === "/blog"

  return (
    <NavbarContainer
      className={`${
        isDark
          ? "lg:text-black hover:bg-primary-600 hover:text-white"
          : "lg:text-white hover:bg-white hover:text-primary-600 "
      }  text-white`}
    >
      <NavbarItem
        className={`${
          isDark
            ? "lg:text-black   group-hover:text-white"
            : "lg:text-white   group-hover:text-primary-600 "
        }  text-white`}
      >
        <Link href={`${href}`}>{title}</Link>
      </NavbarItem>
    </NavbarContainer>
  )
}

const NavbarContainer = twc.div`
 duration-700 transition bg-transparent px-4 py-1 rounded-full cursor-pointer
 group
`

const NavbarItem = twc(GrabboHeaderCaption)`
 duration-700

`

export default NavbarColumn
