import React, { FC, useMemo } from "react"
import DepartmentDetails from "./department-details"
import { allDepartments } from "contentlayer/generated"
import { Metadata } from "next"
type DepartmentPageProps = {
  params: {
    slug: string
  }
}
async function getDocFromParams(params: any) {
  const slug = params.slug
  const data = allDepartments.find(
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
}: DepartmentPageProps): Promise<Metadata> {
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

const DepartmentPage: FC<DepartmentPageProps> = (props) => {
  const { slug } = props.params
  const departmentInfo: any = useMemo(
    () =>
      allDepartments?.find(
        (post: any) =>
          String(post.slug).trim().toLowerCase() ===
          String(slug).trim().toLowerCase()
      ),
    [slug]
  )
  return (
    <>
      <DepartmentDetails content={departmentInfo} />
    </>
  )
}

export default DepartmentPage
