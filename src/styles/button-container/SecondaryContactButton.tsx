import React, { FC } from "react"
import { twc } from "react-twc"
import { GhostHrefButton } from "../ButtonStyles"
import { Phone } from "lucide-react"

const SecondaryContactButton = () => {
  return (
    <ButtonMessageWrapper href="tel:+2348069730625">
      <MessageSecondaryButton>
        <DepartmentIcon /> Give us a call
      </MessageSecondaryButton>
    </ButtonMessageWrapper>
  )
}
const ButtonMessageWrapper = twc.a`
lg:mt-10 mt-6
w-full
flex flex-row gap-4
`
const MessageSecondaryButton = twc(GhostHrefButton)`
w-full
text-primary-600
`
const DepartmentIcon = twc(Phone)`
 w-5 h-5 text-primary-800
 text-primary-600 mr-2
 `
export default SecondaryContactButton
