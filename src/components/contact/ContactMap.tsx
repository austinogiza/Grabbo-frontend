import React from "react"
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
const ContactMap = () => {
  return (
    <>
      <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Get in touch
          </h2>

          <dl className="mt-10 space-y-4 text-base leading-7 text-black">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <BuildingOffice2Icon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <div className="flex flex-col">
                <dd>Plot C83 after FCMB 1st Avenue Gwarimpa Abuja</dd>
                <dd>No. 2 3rd Avenue, Gwarinpa, Abuja</dd>
              </div>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd className="flex flex-col">
                <a className="hover:text-black" href="tel:+2348080679501">
                  +2348080679501
                </a>
                <a className="hover:text-black" href="tel:+2347030703976">
                  +2347030703976
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd className="flex flex-col">
                <a
                  className="hover:text-black"
                  href="mailto:contact@grabbofertilityclinic.com"
                >
                  contact@grabbofertilityclinic.com
                </a>
                <a
                  className="hover:text-black"
                  href="mailto:grabbodiagnostic@gmail.com"
                >
                  grabbodiagnostic@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}

export default ContactMap
