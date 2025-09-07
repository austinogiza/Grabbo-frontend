"use client"
import {
  GrabboBlogTitle,
  GrabboBody2,
  GrabboBody3,
  GrabboHeader7Medium,
  GrabboHeaderCaption25Large,
  GrabboLargeBody,
  MediumGrabboHeader6,
} from "@/styles/TextStyles"
import SiteImage from "@/utils/SiteImage"
import { serializeDate } from "@/utils/date"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"
import { twc } from "react-twc"
interface BlogPostCardProps {
  imageUrl?: string
  date?: string

  title?: string

  postLink?: string
  description?: string
  category?: string
  author?: string
}
const BlogPostCard: FC<BlogPostCardProps> = (props) => {
  const {
    imageUrl,
    date,

    title,
    category,
    postLink,
    description,
  } = props
  return (
    <>
      <Link href={`/blog/${postLink}`} prefetch={true}>
        <article className="flex flex-col transition-all min-h-[450px] duration-500 hover:border-neutral-600 group  items-start justify-between w-full   p-3 border border-greyscale-100 bg-greyscale-0 shadow-2  rounded-2xl">
          <div className=" w-full max-w-[550px] h-[190px]">
            {" "}
            <div className=" w-full">
              <SiteImageContainer
                src={`${imageUrl}`}
                alt=""
                className="aspect-[16/9] transition-all duration-500 group-hover:border-primary-200 w-full rounded-lg border border-gray-100 object-cover   h-[190px]"
              />
            </div>
            <div className="w-full">
              <div className="mt-3 flex items-center gap-x-4 text-xs">
                <p className="relative z-10 rounded-full bg-primary-50 capitalize text-primary-600 px-3 py-1.5 font-medium ">
                  {category}
                </p>
                <p className="text-gray-500">{serializeDate(date)}</p>
              </div>
              <BlogContentRow className="group relative">
                <div>
                  <BlogTitleText>{title}</BlogTitleText>
                  <BlogDescriptionText>{description}</BlogDescriptionText>
                </div>{" "}
              </BlogContentRow>
            </div>{" "}
          </div>
          <CardReadMore>
            Read more <BlogArrow />
          </CardReadMore>
        </article>
      </Link>
    </>
  )
}

const SiteImageContainer = twc.img`

`
const BlogContentRow = twc.div`
flex flex-col justify-start items-start
`
const BlogTitleText = twc(GrabboBlogTitle)`
mt-1`
const BlogDescriptionText = twc(GrabboBody3)`
text-neutral-500 duration-500
mt-1 line-clamp-3
`
const BlogArrow = twc(ArrowUpRight)`
text-black w-6 h-6 ml-2
transition-all duration-500
group-hover:text-white
group-hover:border-none
group-hover:rotate-45
`

const CardReadMore = twc(GrabboHeaderCaption25Large)`
border border-black rounded-full px-3 py-2 flex flex-row items-center justify-center
hover:bg-primary-800  transition-all duration-500 hover:border-primary-500 hover:text-white
group-hover:text-white
group-hover:bg-primary-800
group-hover:border-primary-500
mt-3`
export default BlogPostCard
