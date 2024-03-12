import React from "react"
import Link from "next/link"
import Image from "next/image"

const solutions = [
  {
    title: "Accept and Optimize Payment Globally",
    stage: "Payment",
    content:
      "Keep your business account and all your finance needs safely organized under one roof. Manage money quickly, easily & efficiently. Whether you’re alone or leading a team.",
    image: "/images/content/solutions-pic-1.png",
    url: "/solutions",
  },
  {
    title: "Build a Fintech with Banking as a Service",
    stage: "Custom Card",
    content:
      "Keep your business account and all your finance needs safely organized under one roof. Manage money quickly, easily & efficiently. Whether you’re alone or leading a team.",
    image: "/images/content/solutions-pic-2.png",
    url: "/solutions",
  },
]

const HomeFeatures = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="mb-30 xl:mb-24 lg:mb-18 md:mb-12">
            <div className="stage">Solutions</div>
            <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
              Open Your Business Account Online
            </div>
            <div className="max-w-[48rem] text-greyscale-400 md:text-lg">
              Keep your business account and all your finance needs safely
              organized under one roof. Manage money quickly, easily &
              efficiently. Whether you’re alone or leading a team.
            </div>
          </div>
          <div className="space-y-30 xl:space-y-24 lg:space-y-20 md:space-y-12">
            {solutions.map((solution, index) => (
              <div
                className="flex items-center -mx-20 odd:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0"
                key={index}
              >
                <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                  <div className="stage">{solution.stage}</div>
                  <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                    {solution.title}
                  </div>
                  <div className="mb-12 text-greyscale-400 md:mb-6 md:text-lg">
                    {solution.content}
                  </div>
                  <Link
                    className="btn-primary pr-5 md:w-full"
                    href={solution.url}
                  >
                    <span>Learn More</span>
                    {/* <Icon className="w-5 h-5" name="arrow-right" /> */}
                  </Link>
                </div>
                <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                  <Image
                    className="w-full"
                    src={solution.image}
                    width={500}
                    height={450}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeFeatures
