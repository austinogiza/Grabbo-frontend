import { siteConfig } from "@/config/site"
import HomePage from "./home"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Home | ${siteConfig.title}`,
  description: siteConfig.description,
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}
