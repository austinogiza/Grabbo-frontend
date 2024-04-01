"use client"
import { GrabboHeaderCaption } from "@/styles/TextStyles"
import { TickCircle } from "iconsax-react"
import React, { FC } from "react"
import { twc } from "react-twc"

interface ValuesListProps {
  title?: string
  icon?: string
}
const ValuesList: FC<ValuesListProps> = (props) => {
  const { title, icon } = props
  return (
    <ValueWrapperContainer>
      <ValueWrapperCover>
        <ValuesIcon src={icon} alt={title} />
      </ValueWrapperCover>
      <TextCover>
        {" "}
        <ValuesText>{title}</ValuesText>{" "}
      </TextCover>
    </ValueWrapperContainer>
  )
}
const ValuesIcon = twc.img`
 w-6 h-6
object-contain
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
lg:my-3
`
const ValuesText = twc(GrabboHeaderCaption)`
mb-2 lg:mb-4
text-black
w-full
flex flex-row items-center gap-2 justify-start
`
export default ValuesList
