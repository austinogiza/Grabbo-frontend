import { MainFAQData } from "@/data/FAQData"
import {
  GrabboBody2,
  GrabboHeader5,
  GrabboHeader7,
  GrabboHeaderCaption25Large,
  GrabboHeaderCaptionLargeRegular,
  GrabboLargeBody,
  MainGrabboHeader4,
} from "@/styles/TextStyles"
import Link from "next/link"
import React from "react"
import { twc } from "react-twc"
import FAQAccordion from "./FAQAccordion"

const FrequentlyQuestions = () => {
  const [selectedFAQ, setSelectedFAQ] = React.useState<number | null>(0)

  const handleFAQClick = (number: number) => {
    if (selectedFAQ === number) return
    setSelectedFAQ(number)
  }

  return (
    <div className="bg-white w-full min-h-[650px]">
      <div className="flex flex-col items-center gap-0-10 justify-center max-w-[1180px] mx-auto lg:my-20 my-10 px-4">
        <div className="max-w-[650px] w-full mx-auto my-4 mb-10">
          <InsightsCover>
            <InsightText>Some Insight</InsightText>
          </InsightsCover>
          <QuestionsTitle>Frequently asked questions</QuestionsTitle>
        </div>
        <div className="max-w-[850px] w-full">
          {" "}
          <div className="">
            {MainFAQData.map((data, index: number) => (
              <FAQAccordion
                key={index}
                clickHandler={handleFAQClick}
                title={data.title}
                isOpen={selectedFAQ === index}
                number={index}
                answer={data.answer}
              />
            ))}
          </div>
          <div className="mx-auto lg:mt-10 mt-6">
            {" "}
            <QuestionsSubText>
              {" "}
              Can’t find the answer you’re looking for?{" "}
              <Link
                href="/contact"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Contact us
              </Link>{" "}
            </QuestionsSubText>
          </div>
        </div>
      </div>
    </div>
  )
}
const QuestionsTitle = twc(MainGrabboHeader4)`
text-center text-black
mb-3 mt-6
`
const QuestionsSubText = twc(GrabboHeaderCaption25Large)`
text-center text-neutral-400

`
const InsightsCover = twc.div`
rounded-full border-[1px] border-primary-600
max-w-[120px] mx-auto  mb-4 flex flex-row items-center justify-center py-1 px-2
`
const InsightText = twc(GrabboHeaderCaptionLargeRegular)`
text-primary-600
`
export default FrequentlyQuestions
