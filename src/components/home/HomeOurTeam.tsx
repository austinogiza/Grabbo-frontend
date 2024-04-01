"use client"
import {
  GrabboHeader4,
  GrabboHeader5,
  GrabboHeader6,
  GrabboHeaderCaption25Large,
  GrabboLargeBody,
  MainGrabboHeader4,
} from "@/styles/TextStyles"
import React from "react"
import { twc } from "react-twc"
const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Toronto, Canada",
  },

  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Toronto, Canada",
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },

  // More people...
]
const HomeOurTeam = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <HomeInfoTitle>Our team</HomeInfoTitle>
          <HomeInfoSubTitle>
            Our dedicated team ensures that here, you're not just a patient;
            you're part of a community dedicated to helping you achieve your
            dreams of parenthood.
          </HomeInfoSubTitle>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 "
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {person.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
const HomeInfoTitle = twc(MainGrabboHeader4)`
text-white
`
const HomeInfoSubTitle = twc(GrabboLargeBody)`
text-neutral-200
mt-2
`
export default HomeOurTeam
