import React, { FC } from "react"
import { twc } from "react-twc"
import { GhostButton, PrimaryButton } from "../ButtonStyles"
interface PrimaryLinkButtonProps {
  title?: string
  href?: string
}
const GhostLinkButton: FC<PrimaryLinkButtonProps> = (props) => {
  const { title, href } = props
  return (
    <ButtonMessageWrapper>
      <MessageButton href={`/${href}`}>{title}</MessageButton>
    </ButtonMessageWrapper>
  )
}

const ButtonMessageWrapper = twc.div`
mt-10
w-full
max-w-[550px]

flex flex-row gap-4
`
const MessageButton = twc(GhostButton)`
w-full
`
export default GhostLinkButton
