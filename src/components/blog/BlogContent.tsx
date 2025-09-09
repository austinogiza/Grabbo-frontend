"use client"
import { twc } from "react-twc"
import BlogPostCard from "./BlogPostCard"
import { allBlogs } from "contentlayer/generated"
import { useEffect, useState } from "react"
import BlogLoader from "./blog-loader"

const BlogContent = () => {
  const [blogData, setBlogData] = useState<any>(undefined)
  useEffect(() => {
    if (!allBlogs) return
    const data = allBlogs.sort(
      (a: any, b: any) => Number(b.number) - Number(a.number)
    )
    setBlogData(data)
  }, [allBlogs])
  console.log("blogData", blogData, allBlogs)

  return (
    <>
      <div>
        {" "}
        <>
          <BlogContainer>
            {!!blogData ? (
              <>
                {" "}
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
              </>
            ) : (
              <>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <BlogLoader key={index} />
                ))}
              </>
            )}
          </BlogContainer>
        </>
      </div>
    </>
  )
}
const BlogContainer = twc.div`
px-6
w-full grid lg:grid-cols-3 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
mx-auto mt-6 max-w-[1180px] gap-2 mb-10
`
export default BlogContent
