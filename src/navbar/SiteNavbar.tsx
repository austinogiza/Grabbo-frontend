"use client"

import type { NavbarProps } from "@nextui-org/react"

import React, { FC } from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
} from "@nextui-org/react"

import { cn } from "@/utils/cn"
import { NavbarData } from "@/data/NavbarData"
import Link from "next/link"
import NavbarLogo from "./NavbarLogo"

const menuItems = [
  "About",
  "Blog",
  "Customers",
  "Pricing",
  "Enterprise",
  "Changelog",
  "Documentation",
  "Contact Us",
]
const SiteNavbar: FC<NavbarProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      {...props}
      isBordered
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarBrand>
        <NavbarLogo />
      </NavbarBrand>
      <NavbarContent
        className="hidden h-11 gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-4 shadow-medium backdrop-blur-md backdrop-saturate-150 md:flex dark:bg-default-100/50"
        justify="center"
      >
        {NavbarData.map((item, index) => (
          <NavbarItem key={index}>
            <Link className="text-default-500" href={`${item.href}`}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  )
}

export default SiteNavbar
