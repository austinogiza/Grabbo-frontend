import React from "react"
import Department from "./department"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
export const metadata: Metadata = {
  title: `Our departments | ${siteConfig.title}`,
  description: siteConfig.description,
}

const page = () => {
  return (
    <>
      <Department />
    </>
  )
}

export default page
