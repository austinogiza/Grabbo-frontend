"use client"
import {
  GrabboBody2,
  GrabboBody3,
  GrabboHeader7Medium,
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
        <article className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            <img
              src={imageUrl}
              alt=""
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
          </div>
          <div className="max-w-[800px] ">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 ">
                {title}
              </a>
              <span className="w-1 h-1 bg-neutral-400 mx-1 rounded-full"></span>
              <time dateTime={date} className="text-gray-500">
                {date}
              </time>
            </div>
            <BlogContentRow className="group relative">
              <div>
                <BlogTitleText>{title}</BlogTitleText>
                <BlogDescriptionText>{description}</BlogDescriptionText>
              </div>{" "}
              <div>
                <span>
                  <BlogArrow />
                </span>
              </div>
            </BlogContentRow>
          </div>
        </article>
      </Link>
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
export default BlogPostCard
