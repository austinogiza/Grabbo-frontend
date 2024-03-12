export interface SiteConfig {
  username: string
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
  }
}

export const siteConfig: SiteConfig = {
  username: "@GrabboFertilityClinic",
  name: "Grabbo Fertility Clinic",
  description:
    "Grabbo Fertility Clinic and Diagnostic Centre is one of the best Medical Centre in Gwarinpa, Abuja, Nigeria. We give you a precise and reliable medical",
  url: "http://grabbofertilityclinic.com",
  ogImage: "https://grabbofertilityclinic.com/og.png",
  links: {
    twitter: "",
  },
}
