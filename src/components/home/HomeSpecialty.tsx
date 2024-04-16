"use client"
import ExperiencingInterest from "../utils/ExperiencingInterest"
import { twc } from "react-twc"
import {
  GrabboHeader4,
  GrabboHeader6,
  GrabboHeader7Medium,
  GrabboHeaderCaption25Large,
  GrabboLargeBody,
} from "@/styles/TextStyles"
import { BottomSpecialtyData, TopSpecialtyData } from "@/data/SpecialtyData"
import ExperiencingSpecialty from "../utils/ExperiencingSpecialty"
import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"
import SecondaryContactButton from "@/styles/button-container/SecondaryContactButton"

const HomeSpecialty = () => {
  return (
    <div className="w-full lg:mt-36 mt-20 min-h-[850px]">
      <div className="max-w-[1180px] mx-auto flex flex-col">
        {" "}
        <div className="w-full max-w-[850px]  mx-auto ">
          <UltimateInfoTitle>What’s Our Speciality?</UltimateInfoTitle>
          <UltimateInfoSubText>
            Grabbo Fertility Clinic and Diagnostic Centre is one of the best
            Medical Centre in Gwarinpa, Abuja, Nigeria. We give you a precise
            and reliable medical services using best known medical practice in
            the world.
          </UltimateInfoSubText>
        </div>
        <div className="lg:my-20 my-10 flex flex-col gap-2 px-6">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center w-full lg:gap-3 gap-6">
            {TopSpecialtyData.map((data, index: number) => (
              <ExperiencingSpecialty
                key={index}
                title={data.title}
                image={data.image}
                icon={data.icon}
                description={data.description}
              />
            ))}
          </div>
          <div className="grid lg:grid-cols-2 mx-auto w-full grid-cols-1 lg:gap-3 gap-6 ">
            {BottomSpecialtyData.map((data, index: number) => (
              <ExperiencingInterest
                key={index}
                icon={data.icon}
                image={data.image}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
          <div className="mx-auto w-full my-20 max-w-[750px] flex flex-col  min-h-[250px] items-center justify-center">
            <SectionTitle>
              {"Let's"} find the right solution for your fertility journey.
            </SectionTitle>
            <div className="lg:max-w-[450px] max-w-[750px] w-full lg:mx-0 mx-auto flex lg:flex-row flex-col gap-3">
              <PrimaryLinkButton href="contact" title="Book an appointment" />{" "}
              <SecondaryContactButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SectionTitle = twc(GrabboHeader4)`
text-center max-w-[480px]
`

const UltimateInfoTitle = twc(GrabboHeader4)`
text-black
text-center
`
const UltimateInfoSubText = twc(GrabboHeaderCaption25Large)`
mt-2
text-neutral-400
text-center
max-w-[650px] mx-auto
`
export default HomeSpecialty
