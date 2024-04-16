"use client"
import { twc } from "react-twc"
import BlogPostCard from "./BlogPostCard"
import { BlogPostsData } from "@/data/BlogData"
import { allBlogs, Blog } from "contentlayer/generated"

const BlogContent = () => {
  return (
    <BlogContainer>
      {allBlogs?.map((post) => (
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
mx-auto mt-6 max-w-[1180px] flex flex-col
`
export default BlogContent
