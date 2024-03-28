"use client"
import { GrabboHeaderCaption } from "@/styles/TextStyles"
import { TickCircle } from "iconsax-react"
import React, { FC } from "react"
import { twc } from "react-twc"

interface ValuesListProps {
  title?: string
}
const ValuesList: FC<ValuesListProps> = (props) => {
  const { title } = props
  return (
    <ValueWrapperContainer>
      <ValueWrapperCover>
        <ValuesIcon />
      </ValueWrapperCover>
      <TextCover>
        {" "}
        <ValuesText>{title}</ValuesText>{" "}
      </TextCover>
    </ValueWrapperContainer>
  )
}
const ValuesIcon = twc(TickCircle)`
text-primary-600 w-5 h-5
`

const TextCover = twc.div`

w-full
flex  mt-4


`
const ValueWrapperCover = twc.div`
h-[44px] max-w-[44px]
w-full
bg-primary-50
flex
items-center
justify-center rounded-full

`
const ValueWrapperContainer = twc.div`
flex flex-row
items-center gap-2
justify-center
my-1
`
const ValuesText = twc(GrabboHeaderCaption)`
mb-2 lg:mb-4
text-black
w-full
flex flex-row items-center gap-2 justify-start
`
export default ValuesList
