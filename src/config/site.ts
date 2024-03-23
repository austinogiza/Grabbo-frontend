export interface SiteConfig {
  title: string
  name: string
  description: string
  social?: string

  url: string
  ogImage: string
  links: {
    twitter: string
  }
}

export const siteConfig: SiteConfig = {
  name: "@rabboFertilityClinic",
  social: "@GrabboFertilityClinic",

  title: "Grabbo Fertility Clinic",
  description:
    "Grabbo Fertility Clinic and Diagnostic Centre is one of the best Medical Centre in Gwarinpa, Abuja, Nigeria. We give you a precise and reliable medical",
  url: "http://grabbofertilityclinic.com",
  ogImage: "https://grabbofertilityclinic.com/og.png",
  links: {
    twitter: "",
  },
}
