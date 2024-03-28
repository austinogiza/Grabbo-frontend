"use client"
import React, { useEffect } from "react"
import "@/styles/globals.css"
import { authCheckState } from "@/store/actions/authAction"
import { useAppDispatch } from "@/store/hooks"
import MessageSection from "@/components/MessageSection"
import SiteNavbar from "@/navbar/SiteNavbar"

import { usePathname } from "next/navigation"
import SiteFooter from "@/footer/SiteFooter"

interface ContainerProps {
  children: React.ReactNode
}
const SiteContainer: React.FC<ContainerProps> = (props) => {
  const { children } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authCheckState())
  }, [dispatch])
  const pathname = usePathname()
  console.log("pathnameeee", pathname)
  const showMessage =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/blog" ||
    pathname === "/department" ||
    pathname.startsWith("/department") ||
    pathname.startsWith("/blog")
  return (
    <>
      <SiteNavbar />
      {children}
      {showMessage ? (
        <>
          {" "}
          <MessageSection />
        </>
      ) : null}

      <SiteFooter />
    </>
  )
}

export default SiteContainer
