"use client"
import React, { useEffect } from "react"
import "@/styles/globals.css"

import MessageSection from "@/components/utils/MessageSection"
import SiteNavbar from "@/navbar/SiteNavbar"

import { usePathname } from "next/navigation"
import SiteFooter from "@/footer/SiteFooter"
import FrequentlyQuestions from "@/components/utils/FrequentlyQuestions"

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
          <FrequentlyQuestions />
          <MessageSection />
        </>
      ) : null}

      <SiteFooter />
    </>
  )
}

export default SiteContainer
