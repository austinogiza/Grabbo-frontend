"use client"
import { twc } from "react-twc"
import BlogPostCard from "./BlogPostCard"
import { BlogPostsData } from "@/data/BlogData"
import { allBlogs, Blog } from "contentlayer/generated"
import { useEffect, useState } from "react"

const BlogContent = () => {
  const [blogData, setBlogData] = useState<any>(undefined)
  useEffect(() => {
    if (!allBlogs) return
    const data = allBlogs.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    setBlogData(data)
  }, [allBlogs])

  return (
    <BlogContainer>
      {blogData?.map((post: any) => (
        <BlogPostCard
          key={post._id}
          title={post.name}
          postLink={post.slug}
          description={post.description}
          imageUrl={post.image}
          date={post.date}
          category={post.category}
        />
      ))}
    </BlogContainer>
  )
}
const BlogContainer = twc.div`
px-6
w-full
mx-auto mt-6 max-w-[1180px] flex flex-col mb-10
`
export default BlogContent
