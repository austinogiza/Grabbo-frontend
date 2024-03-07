"use client"
import React, { useEffect } from "react"
import "@/styles/globals.css"
import { authCheckState } from "@/store/actions/authAction"
import { useAppDispatch } from "@/store/hooks"
import MessageSection from "@/components/MessageSection"
import SiteNavbar from "@/navbar/SiteNavbar"
import SiteFoooter from "@/footer/SiteFoooter"

interface ContainerProps {
  children: React.ReactNode
}
const SiteContainer: React.FC<ContainerProps> = (props) => {
  const { children } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authCheckState())
  }, [dispatch])

  return (
    <>
      <SiteNavbar />
      {children}
      <MessageSection />
      <SiteFoooter />
    </>
  )
}

export default SiteContainer
