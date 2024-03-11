"use client"
import {
  GrabboBody2,
  GrabboBody3,
  GrabboHeader7Medium,
  GrabboHeaderCaption25Large,
  MediumGrabboHeader6,
} from "@/styles/TextStyles"
import { ArrowUpRight } from "lucide-react"
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

    postLink,
    description,
  } = props
  return (
    <>
      <Link href={`/blog/${postLink}`}>
        <article className="flex flex-row items-start gap-3 justify-between my-4 p-4 border border-greyscale-100 bg-greyscale-0 shadow-2  rounded-lg">
          <div className="relative w-full max-w-[550px]">
            <img
              src={imageUrl}
              alt=""
              className="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
          </div>
          <div className="max-w-[800px] ml-2 mt-6">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <a className="relative z-10 rounded-full bg-primary-50 text-primary-600 px-3 py-1.5 font-medium ">
                {title}
              </a>
              <time dateTime={date} className="text-gray-500">
                {date}
              </time>
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
duration-200
group-hover:text-white
group-hover:border-primary-200
`

const CardReadMore = twc(GrabboHeaderCaption25Large)`
border border-black rounded-full px-3 py-2 flex flex-row items-center justify-center
hover:bg-primary-800  duration-200 hover:border-primary-200 hover:text-white
group-hover:text-white
group-hover:bg-primary-800
group-hover:border-primary-200
mt-8`
export default BlogPostCard
