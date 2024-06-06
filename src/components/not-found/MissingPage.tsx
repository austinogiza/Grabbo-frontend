import { NotFoundData } from "@/data/ErrorData"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

import { ArrowLeft } from "iconsax-react"

import Link from "next/link"
import { twc } from "react-twc"

const MissingPage = () => {
  return (
    <div className="bg-white mt-20">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-xl font-semibold leading-8 bg-primary-50 text-primary-600 px-4 py-1 rounded-full max-w-[100px] mx-auto mb-3">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Oops! This page does not exist
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            We might have moved the content you are looking for.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <ul
            role="list"
            className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
          >
            {NotFoundData.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                  <link.icon
                    className="h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <h3 className=" font-bold text-xl leading-6 text-gray-900">
                    <a href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {link.description}
                  </p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400 mr-5"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Link
              prefetch={true}
              href="/"
              className="text-sm flex flex-row font-semibold leading-6 text-primary-600 bg-primary-50 px-5 py-2 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-full hover:border hover:border-primary-600 duration-200"
            >
              <AriaButtonIcon />
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

const AriaButtonIcon = twc(ArrowLeft)`
mr-2
`
export default MissingPage
