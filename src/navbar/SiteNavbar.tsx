"use client"
import { useEffect, useState } from "react"

import { NavbarData } from "@/data/NavbarData"
import NavbarLogo from "./NavbarLogo"

import styled from "styled-components"
import NavbarMenuToggle from "./NavbarMenuToggle"
import NavbarMobileMenu from "./NavbarMobileMenu"
import NavbarButtons from "./NavbarButtons"
import NavbarColumn from "./NavbarColumn"
import { usePathname, useRouter } from "next/navigation"

const SiteNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMobileMenuOpen(false)

    return () => {
      setMobileMenuOpen(false)
    }
  }, [pathname, router])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isDark =
    pathname === "/about" || pathname === "/department" || pathname === "/blog"
  return (
    <div className="w-full absolute top-0 left-0 z-10">
      {" "}
      <div className="flex px-3  relative flex-row items-center justify-between max-w-[1230px] mx-auto ">
        <div className="w-full max-w-[120px]">
          <NavbarLogo />
        </div>
        <NavbarContainer>
          {NavbarData.map((data, index: number) => (
            <NavbarColumn key={index} title={data.title} href={data.href} />
          ))}
        </NavbarContainer>
        <NavbarButtonCover>
          {" "}
          <NavbarButtons />
        </NavbarButtonCover>
        <NavbarMenuToggle
          isDark={isDark}
          navbarClicked={toggleMobileMenu}
          active={mobileMenuOpen}
        />

        <NavbarMobileMenu active={mobileMenuOpen} />
      </div>
    </div>
  )
}

const NavbarContainer = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`
const NavbarButtonCover = styled.div`
  max-width: 190px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`
export default SiteNavbar
