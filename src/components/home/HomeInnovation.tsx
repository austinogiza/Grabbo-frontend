"use client"

import { twc } from "react-twc"
import {
  GrabboHeader4,
  GrabboHeader6,
  GrabboHeaderCaption25Large,
  GrabboLargeBody,
  MainGrabboHeader4,
} from "@/styles/TextStyles"
import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"

const HomeInnovation = () => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50"></header>
      <main>
        <div className="relative isolate  w-full flex flex-col items-center justify-center">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className=" w-full flex flex-col items-center justify-center ">
            <div className=" w-full flex flex-col items-center max-w-[750px] justify-center mt-20 lg:mt-40">
              <HomeInfoTitle>
                Your fertility <br /> status is our concern
              </HomeInfoTitle>
              <HomeInfoSubTitle className="">
                Our unmatched success rates and commitment to innovation define
                our legacy of excellence. Our comprehensive fertility services
                are designed to support you every step of the way, from initial
                consultations and diagnostic testing to advanced treatments and
                ongoing support.
              </HomeInfoSubTitle>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
const HomeInfoTitle = twc(MainGrabboHeader4)`
text-black text-center
max-w-[550px]
w-full
`
const HomeInfoSubTitle = twc(GrabboLargeBody)`
text-neutral-500
max-w-[650px]
mt-2
text-center
`
export default HomeInnovation
