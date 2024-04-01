"use client"

import { FooterNavigationData } from "@/data/FooterData"
import {
  GrabboHeaderCaptionLarge,
  GrabboHeaderCaptionLargeRegular,
  GrabboHeaderCaptionRegular,
} from "@/styles/TextStyles"
import { twc } from "react-twc"
import FooterLogo from "./FooterLogo"

const SiteFooter = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <FooterLogo />
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {FooterNavigationData.company.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {FooterNavigationData.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <GrabboFooterTitle>
          &copy; {new Date().getFullYear()} Grabbo. All rights reserved.
        </GrabboFooterTitle>
      </div>
    </footer>
  )
}

const GrabboFooterTitle = twc(GrabboHeaderCaptionRegular)`
mt-10 text-center  text-neutral-400
`
export default SiteFooter
