import { GrabboBody3, GrabboHeader7Medium } from "@/styles/TextStyles"
import { ArrowUpRight } from "lucide-react"
import React, { FC } from "react"
import { twc } from "react-twc"
interface DepartmentProps {
  imageUrl?: string
  name?: string
  title?: string
}
const DepartmentCard: FC<DepartmentProps> = (props) => {
  const { imageUrl, name, title } = props
  return (
    <>
      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div>
          <div>
            {" "}
            <h2>{name}</h2>{" "}
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              {title}
            </h3>
          </div>
          <div></div>
        </div>
      </article>
    </>
  )
}
const BlogContentRow = twc.div`
flex flex-row justify-between items-center
`
const BlogTitleText = twc(GrabboHeader7Medium)`
mt-5`
const BlogDescriptionText = twc(GrabboBody3)`
text-neutral-400
mt-2 line-clamp-3
`
const BlogArrow = twc(ArrowUpRight)`
text-black w-8 h-10 ml-4
`
export default DepartmentCard
