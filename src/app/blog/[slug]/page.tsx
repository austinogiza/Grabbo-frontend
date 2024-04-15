import React, { FC } from "react"
import BlogDetails from "./blog-details"
import { allBlogs } from "contentlayer/generated"
import { Metadata } from "next"
type BlogPageProps = {
  params: {
    slug: string
  }
}
async function getDocFromParams(params: any) {
  const slug = params.slug
  const data = allBlogs.find(
    (data) =>
      String(data.slug).trim().toLowerCase() ===
      String(slug).trim().toLowerCase()
  )

  if (!data) {
    null
  }

  return data
}
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const post = await getDocFromParams(params)

  if (!post) {
    return {}
  }

  const ogUrl = post.image

  return {
    title: post.name,
    description: post.description,
    openGraph: {
      title: post.name,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.name,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

const BlogPage: FC<BlogPageProps> = (props) => {
  const { slug } = props.params
  const postInfo: any = React.useMemo(
    () =>
      allBlogs?.find(
        (post: any) =>
          String(post.slug).trim().toLowerCase() ===
          String(slug).trim().toLowerCase()
      ),
    [slug]
  )
  return (
    <>
      <BlogDetails content={postInfo} />
    </>
  )
}

export default BlogPage
