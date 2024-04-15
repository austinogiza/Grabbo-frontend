"use client"
import { motion } from "framer-motion"
import React, { FC } from "react"
import { twc } from "react-twc"
import {
  GrabboBody2,
  GrabboHeader5,
  GrabboHeader7Medium,
  GrabboHeaderCaptionLargeRegular,
  MediumGrabboHeader6,
} from "@/styles/TextStyles"
import { Minus, Plus } from "lucide-react"
import styled from "styled-components"
import { grabboColors } from "@/styles/ColorStyles"

interface FAQAccordionProps {
  title?: string
  description?: any
  clickHandler?: (number?: any) => void
  isOpen?: boolean
  number?: number
}
const FAQAccordion: FC<FAQAccordionProps> = (props) => {
  const { title, description, clickHandler, isOpen, number } = props
  return (
    <motion.div className="max-w-[880px] mx-auto my-4 cursor-pointer">
      <FAQRowWrapper isOpen={isOpen} onClick={() => clickHandler?.(number)}>
        <div className="max-w-[48px]  min-h-[48px] w-full">
          <FAQIconWrapper>
            {isOpen ? (
              <>
                {" "}
                <MainMinusIcon />
              </>
            ) : (
              <>
                <MainPlusIcon />
              </>
            )}
          </FAQIconWrapper>
        </div>
        <div>
          <QuestionsTitle>{title}</QuestionsTitle>
          <QuestionsSubText
            isOpen={isOpen}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </FAQRowWrapper>
    </motion.div>
  )
}

const FAQIconWrapper = twc.div`
max-w-[48px]  min-h-[48px] rounded-full bg-smoothBG border-1 flex items-center justify-center

w-full
`

const FAQRowWrapper = styled.div<FAQAccordionProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  background: ${(props) =>
    props.isOpen ? `${grabboColors.snowWhite}` : `${grabboColors.white}`};
  transition: 0.4s ease-in;
  padding: 24px 12px;
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.isOpen ? `0px 0px 0px 1px rgba(0, 0, 0, 0.08)` : `none`};
  &:hover {
    background: ${grabboColors.snowWhite};
  }
  a {
    color: ${grabboColors.primary[500]};
  }
`
const MainPlusIcon = twc(Plus)`
 w-6 h-6 text-neutral-500
`
const MainMinusIcon = twc(Minus)`
 w-6 h-6 text-neutral-500
`
const QuestionsTitle = twc(MediumGrabboHeader6)`

mb-1
`
const QuestionsSubText = styled(
  GrabboHeaderCaptionLargeRegular
)<FAQAccordionProps>`
  color: ${grabboColors.neutral[500]};
  display: ${(props) => (props.isOpen ? `flex` : `none`)};
`
export default FAQAccordion
