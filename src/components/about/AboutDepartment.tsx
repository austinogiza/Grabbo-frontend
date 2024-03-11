"use client"

import Image from "next/image"

const items = [
  {
    title: "Powered by People",
    content:
      "Tortor pulvinar vestibulum eget aliquet penatibus interdum pellentesque. Diam ultrices in risus ac nunc imperdiet ultricies. Viverra est nunc condimentum aliquam pharetra ac.",
    icon: "/images/content/icons/user-circle.svg",
  },
  {
    title: "Inspire and Provoke",
    content:
      "Tortor pulvinar vestibulum eget aliquet penatibus interdum pellentesque. Diam ultrices in risus ac nunc imperdiet ultricies. Viverra est nunc condimentum aliquam pharetra ac.",
    icon: "/images/content/icons/trophy.svg",
  },
  {
    title: "Make it Right",
    content:
      "Tortor pulvinar vestibulum eget aliquet penatibus interdum pellentesque. Diam ultrices in risus ac nunc imperdiet ultricies. Viverra est nunc condimentum aliquam pharetra ac.",
    icon: "/images/content/icons/award.svg",
  },
  {
    title: "Be Transparent",
    content:
      "Tortor pulvinar vestibulum eget aliquet penatibus interdum pellentesque. Diam ultrices in risus ac nunc imperdiet ultricies. Viverra est nunc condimentum aliquam pharetra ac.",
    icon: "/images/content/icons/face-happy.svg",
  },
]

type QualityProps = {}

const AboutDepartment = ({}: QualityProps) => (
  <div className="pt-22 pb-30 xl:pb-24 md:py-12">
    <div className="container">
      <div className="stage">Why Finto</div>
      <div className="max-w-[57.5rem] mb-16 text-h3 xl:max-w-[44rem] xl:text-h4 md:mb-8">
        Finto is a Place Where Everyone Can Be The Best Version of Themselves
      </div>
      <div className="flex flex-wrap -mt-8 -mx-4 md:-mt-6 md:mx-0">
        {items.map((item, index) => (
          <div
            className="w-[calc(50%-2rem)] mt-8 mx-4 p-8 bg-greyscale-0 border border-greyscale-100 shadow-2 lg:p-6 md:w-full md:mt-6 md:mx-0"
            key={index}
          >
            <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-primary-300">
              <Image
                src={item.icon}
                className="w-6"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className="mb-3 text-h6">{item.title}</div>
            <div className="text-greyscale-400">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default AboutDepartment
