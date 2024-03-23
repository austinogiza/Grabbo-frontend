import React from "react"
import BlogPage from "./blog"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Our Blog | ${siteConfig.title}`,
  description: siteConfig.description,
}
const page = () => {
  return (
    <>
      <BlogPage />
    </>
  )
}

export default page
