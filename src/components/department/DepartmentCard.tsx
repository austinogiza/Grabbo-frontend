"use client"
import {
  GrabboBody3,
  GrabboHeader5,
  GrabboHeader7Medium,
} from "@/styles/TextStyles"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import React, { FC } from "react"
import { twc } from "react-twc"
import styled from "styled-components"
interface DepartmentInfoProps {
  imageUrl?: string
  title?: string
  departmentLink?: string
  description?: string
}
const DepartmentCard: FC<DepartmentInfoProps> = (props) => {
  const {
    imageUrl,

    title,

    departmentLink,
    description,
  } = props
  return (
    <>
      <Link className="w-full" href={`/department/${departmentLink}`}>
        <DepartmentCover imageUrl={imageUrl} className="relative group w-full">
          <MainOverlay />
          <BlogContentRow className="">
            <div>
              <BlogTitleText>{title}</BlogTitleText>
              <BlogDescriptionText>{description}</BlogDescriptionText>
            </div>{" "}
            <div>
              <CardArrowCover>
                <BlogArrow />
              </CardArrowCover>
            </div>
          </BlogContentRow>
        </DepartmentCover>
      </Link>
    </>
  )
}

const DepartmentCover = styled.div<DepartmentInfoProps>`
  max-width: 850px;
  width: 100%;
  min-width: 550px;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 24px;
  border-radius: 32px;
  background: ${(props) =>
    props.imageUrl && `url(${props.imageUrl}) no-repeat center center/cover`};
`
const BlogContentRow = twc.div`
flex flex-row justify-between items-center
relative z-[3]
mb-10
w-full
`
const MainOverlay = styled.div`
  position: absolute;
  border-radius: 32px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.44);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
`
const BlogTitleText = twc(GrabboHeader5)`
mt-5  text-white`
const BlogDescriptionText = twc(GrabboBody3)`
text-white
mt-2 line-clamp-3
`
const BlogArrow = twc(ArrowUpRight)`
text-black w-8 h-8
`
const CardArrowCover = twc.span`
bg-white w-16 h-16 rounded-full flex items-center justify-center
group-hover:rotate-45 duration-150
`

export default DepartmentCard
