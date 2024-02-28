"use client"
import Contactform from "@/components/contact/Contactform"
import { ContactData } from "@/data/ContactData"
import React from "react"

const ContactSection = () => {
  return (
    <>
      {" "}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consect adipisicing possimus.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {ContactData.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.title}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.title}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Contactform />
    </>
  )
}

export default ContactSection
