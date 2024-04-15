import React, { FC } from "react"
import { twc } from "react-twc"
import { GhostButton, PrimaryButton } from "../ButtonStyles"
interface PrimaryLinkButtonProps {
  title?: string
  href?: string
  icon?: any
  iconTrue?: boolean
}
const GhostLinkButton: FC<PrimaryLinkButtonProps> = (props) => {
  const { title, href, icon, iconTrue } = props
  return (
    <ButtonMessageWrapper>
      <MessageButton href={`/${href}`}>{title}</MessageButton>
      {iconTrue ? (
        <>
          <DepartmentArrow>{icon}</DepartmentArrow>
        </>
      ) : null}
    </ButtonMessageWrapper>
  )
}

const ButtonMessageWrapper = twc.div`
mt-10
w-full
max-w-[550px]
group
flex flex-row gap-4
`
const MessageButton = twc(GhostButton)`
w-full
`
const DepartmentArrow = twc.div`
 w-10 h-10 flex items-center justify-center
group-hover:text-white
 `
export default GhostLinkButton
