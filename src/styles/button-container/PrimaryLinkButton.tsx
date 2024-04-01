import React, { FC } from "react"
import { twc } from "react-twc"
import { PrimaryButton } from "../ButtonStyles"
interface PrimaryLinkButtonProps {
  title?: string
  href?: string
}
const PrimaryLinkButton: FC<PrimaryLinkButtonProps> = (props) => {
  const { title, href } = props
  return (
    <ButtonMessageWrapper>
      <MessageSecondaryButton href={`/${href}`}>{title}</MessageSecondaryButton>
    </ButtonMessageWrapper>
  )
}
const ButtonMessageWrapper = twc.div`
lg:mt-10 mt-6
w-full


flex flex-row gap-4
`
const MessageSecondaryButton = twc(PrimaryButton)`
w-full
`
export default PrimaryLinkButton
