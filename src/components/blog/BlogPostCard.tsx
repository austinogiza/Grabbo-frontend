"use client"
import {
  GrabboBody2,
  GrabboBody3,
  GrabboHeader7Medium,
  GrabboHeaderCaption25Large,
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
        <article className="flex flex-col lg:flex-row transition-all duration-300 hover:border-neutral-600 group  items-start gap-10 justify-start my-4 p-4 border border-greyscale-100 bg-greyscale-0 shadow-2  rounded-xl">
          <div className="relative w-full max-w-[400px] min-h-[350px]">
            <SiteImageContainer
              src={`${imageUrl}`}
              alt=""
              fill
              className="aspect-[16/9] transition-all duration-300 group-hover:border-primary-200 w-full rounded-lg border border-gray-100 object-cover  max-w-[400px] min-h-[350px]"
            />
          </div>
          <div className="max-w-[800px] ml-2 mt-6">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
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
              <CardReadMore>
                Read more <BlogArrow />
              </CardReadMore>
            </BlogContentRow>
          </div>
        </article>
      </Link>
    </>
  )
}

const SiteImageContainer = twc(Image)`

`
const BlogContentRow = twc.div`
flex flex-col justify-between items-start
`
const BlogTitleText = twc(GrabboHeader7Medium)`
mt-5`
const BlogDescriptionText = twc(GrabboBody3)`
text-neutral-400
mt-2 line-clamp-3
`
const BlogArrow = twc(ArrowUpRight)`
text-black w-6 h-6 ml-2
transition-all duration-300
group-hover:text-white
group-hover:border-none
group-hover:rotate-45
`

const CardReadMore = twc(GrabboHeaderCaption25Large)`
border border-black rounded-full px-3 py-2 flex flex-row items-center justify-center
hover:bg-primary-800  transition-all duration-300 hover:border-none hover:text-white
group-hover:text-white
group-hover:bg-primary-800
group-hover:border-none
mt-8`
export default BlogPostCard
