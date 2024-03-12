import { SectorData, ValuesData } from "@/data/ValuesData"
import { TickCircle } from "iconsax-react"
import Image from "next/image"
import React from "react"
import { twc } from "react-twc"

const AboutValues = () => {
  return (
    <div className="pt-30 pb-22 xl:pt-24 md:py-12">
      <div className="container">
        <div className="flex items-center mb-12 lg:block md:mb-6">
          <div className="grow pr-10 lg:pr-0">
            <div className="max-w-[33.13rem] lg:max-w-full lg:mb-12 md:mb-8">
              <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                Statement of Values
              </div>
              <div className="mb-8 text-greyscale-400 md:mb-6">
                GFC key values are created by Grabbo Fertility Clinic employees
                to establish a shared understanding of how we relate to our
                patients and to the community. Together, these seven values form
                the basis of our what we do,who we are strategic goals and guide
                our actions under our code of ethical conduct: –
              </div>
              <div className="space-y-3">
                {ValuesData.map((value, index) => (
                  <div className="flex" key={index}>
                    <ValueWrapperIcon>
                      <ValuesIcon />
                    </ValueWrapperIcon>
                    {value.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="shrink-0 w-[31.25rem] bg-greyscale-25 border border-greyscale-100 lg:w-full">
            <Image
              src="/images/content/career-pic-1.jpg"
              className="w-full lg:aspect-[1.3] lg:object-cover"
              width={500}
              height={450}
              alt=""
            />
          </div>
        </div>
        <div className="flex space-x-8 lg:block lg:space-x-0 lg:space-y-8 md:space-y-6">
          {SectorData.map((item, index) => (
            <div
              className="flex-1 p-6 bg-greyscale-0 border border-greyscale-100 shadow-2"
              key={index}
            >
              <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-secondary-0">
                {/* <Image
                  src={item.icon}
                  className="w-6"
                  width={24}
                  height={24}
                  alt=""
                /> */}
              </div>
              <div className="mb-3 text-h6">{item.title}</div>
              <div className="text-greyscale-400">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
const ValuesText = twc.h1``
const ValuesInfoRow = twc.h1``
const ValuesInfoTitle = twc.h1``
const ValuesInfoSubTitle = twc.h1``
const ValueWrapperIcon = twc.div`
h-8 w-8 rounded-full bg-primary-50 flex justify-center items-center
mr-2
`
const ValuesIcon = twc(TickCircle)`
w-6 h-6 text-primary-600
`
export default AboutValues
