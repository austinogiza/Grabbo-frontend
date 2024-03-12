import Image from "next/image"
import React, { FC } from "react"
interface ComfortSectionProps {
  icon?: any
  title?: string
  content?: string
}
const ComfortSection: FC<ComfortSectionProps> = (props) => {
  const { icon, title, content } = props
  return (
    <>
      {" "}
      <div className="flex-1 p-6 bg-greyscale-0 border border-greyscale-100 shadow-2">
        <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-secondary-0">
          <Image src={icon} className="w-6" width={24} height={24} alt="" />
        </div>
        <div className="mb-3 text-h6">{title}</div>
        <div className="text-greyscale-400">{content}</div>
      </div>
    </>
  )
}

export default ComfortSection
