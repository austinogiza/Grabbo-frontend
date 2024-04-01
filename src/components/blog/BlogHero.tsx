"use client"
import { GrabboHeader3, GrabboHeaderCaption } from "@/styles/TextStyles"
import { ArrowRight } from "iconsax-react"
import { twc } from "react-twc"
import styled from "styled-components"

const BlogHero = () => {
  return (
    <BlogHeroContainer className="bg-white py-10 sm:py-24 mt-10 ">
      <div className=" flex flex-col items-start px-6 justify-center max-w-[1180px]  mx-auto">
        <div className="max-w-[1180px]">
          <div className=" items-start flex flex-col">
            {" "}
            <DepartmentSubTextRow> Grabbo Blog</DepartmentSubTextRow>
            <DepartmentHeroTitle>Resources and insights</DepartmentHeroTitle>
          </div>
        </div>
      </div>
    </BlogHeroContainer>
  )
}

const BlogHeroContainer = styled.div``
const DepartmentSubTextRow = twc(GrabboHeaderCaption)`
flex flex-row items-center justify-center gap-2
bg-primary-50 text-primary-800  rounded-full
px-2 py-1
border border-primary-500
mb-2
`

const DepartmentHeroTitle = twc(GrabboHeader3)``

export default BlogHero
