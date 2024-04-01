import {
  GrabboHeader2Medium,
  GrabboHeader7,
  GrabboHeaderCaptionLarge,
} from "@/styles/TextStyles"
import SiteOverlay from "@/utils/SiteOverlay"
import React from "react"
import { twc } from "react-twc"
import { Message } from "iconsax-react"
const ContactHero = () => {
  return (
    <HeroContainer>
      <ContactHeroImage
        src="/images/contacthero.webp"
        alt="Contact Hero Image"
      />
      <SiteOverlay />
      <ContactInfoSection>
        {" "}
        <ContactTitleRow>
          <ContactSubTitle>
            Get in Touch
            <ContactMessageIcon />
          </ContactSubTitle>

          <ContactTitle>CONTACT US</ContactTitle>
          <ContainHelperText>
            Our doors are open and our experts are ready to assist you with
            personalized care. Connect with us to explore your options, ask
            questions, or schedule a consultation.
          </ContainHelperText>
        </ContactTitleRow>
      </ContactInfoSection>
    </HeroContainer>
  )
}

const HeroContainer = twc.section`
w-full min-h-[650px]
py-20 lg:px-20 px-6 relative
 flex flex-col justify-center items-start
`
const ContactInfoSection = twc.div`
relative z-[5] flex flex-col justify-center items-start
max-w-[850px]
`
const ContactTitleRow = twc.div`
flex flex-col
`
const ContactTitle = twc(GrabboHeader2Medium)`
text-white
mt-4
`
const ContactSubTitle = twc(GrabboHeaderCaptionLarge)`

rounded-full
max-w-[160px]
py-1 px-3
h-8
text-primary-800
border border-primary-600
flex flex-row items-center justify-center bg-primary-50
mb-3

`

const ContainHelperText = twc(GrabboHeader7)`
text-neutral-50
`
const ContactHeroImage = twc.img`
w-full h-full object-cover object-center
absolute z-[1] top-0 left-0
`

const ContactMessageIcon = twc(Message)`
w-5 h-5 text-primary-600 ml-2
`
export default ContactHero
