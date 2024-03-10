import { twc } from "react-twc"
import BlogPostCard from "./BlogPostCard"
import { BlogPostsData } from "@/data/BlogData"

const BlogContent = () => {
  return (
    <BlogContainer>
      {BlogPostsData.map((post) => (
        <BlogPostCard
          key={post.id}
          title={post.title}
          postLink={post.href}
          description={post.description}
          imageUrl={post.imageUrl}
          date={post.date}
          category={post.category}
          author={post.author}
        />
      ))}
    </BlogContainer>
  )
}
const BlogContainer = twc.div`

w-full
mx-auto mt-16 grid max-w-[1328px] grid-cols-1 gap-x-8 gap-y-20  lg:grid-cols-3
`
export default BlogContent
