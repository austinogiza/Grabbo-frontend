import React from "react"

const AboutValues = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Statement of Values
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          GFC key values are created by Grabbo Fertility Clinic employees to
          establish a shared understanding of how we relate to our patients and
          to the community. Together, these seven values form the basis of our
          what we do,who we are strategic goals and guide our actions under our
          code of ethical conduct: –
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        <div className="relative pl-9">
          <dt className="inline font-semibold text-white">
            {/* <value.icon
              className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
              aria-hidden="true"
            /> */}
            {/* {value.name} */}
          </dt>{" "}
          {/* <dd className="inline">{value.description}</dd> */}
        </div>
      </dl>
    </div>
  )
}

export default AboutValues
