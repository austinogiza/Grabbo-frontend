"use client"

import type { NavbarProps } from "@nextui-org/react"

import React, { FC } from "react"

import { NavbarData } from "@/data/NavbarData"
import Link from "next/link"
import NavbarLogo from "./NavbarLogo"
import NavbarButtons from "./NavbarButtons"
import { twc } from "react-twc"
import NavbarColumn from "./NavbarColumn"

const SiteNavbar: FC<NavbarProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <NavbarCover className="absolute top-0 left-0 z-[10]  w-full flex items-center justify-center ">
      <NavbarMenuToggle className="max-w-[1320px] w-full flex items-center justify-between" />

      <NavbarContainer className="max-w-[1320px] mx-auto my-10 flex flex-row items-center justify-between  w-full">
        {" "}
        <NavbarLogo />{" "}
        <NavbarContent className=" w-full">
          {NavbarData.map((item, index) => (
            <NavbarColumn key={index} title={item.title} href={item.href} />
          ))}{" "}
        </NavbarContent>{" "}
        <NavbarButtons />
      </NavbarContainer>
    </NavbarCover>
  )
}
const NavbarContainer = twc.div``
const NavbarContent = twc.div``
const NavbarCover = twc.div``
const NavbarMenuToggle = twc.div``

export default SiteNavbar
