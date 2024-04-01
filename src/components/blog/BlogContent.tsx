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
px-6
w-full
mx-auto mt-16 max-w-[1180px] flex flex-col
`
export default BlogContent
