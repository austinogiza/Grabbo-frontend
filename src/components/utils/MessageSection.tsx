"use client"
import { GhostButton, PrimaryButton } from "@/styles/ButtonStyles"
import {
  GrabboHeader6,
  GrabboHeader7,
  MainGrabboHeader4,
} from "@/styles/TextStyles"
import PrimaryLinkButton from "@/styles/button-container/PrimaryLinkButton"
import SecondaryContactButton from "@/styles/button-container/SecondaryContactButton"
import { twc } from "react-twc"
import styled from "styled-components"

const MessageSection = () => {
  return (
    <MessageContainer>
      <div className="mx-auto   min-h-[750px] flex items-center justify-center px-6 lg:px-8 relative">
        <MessageMainImage src="/images/message.webp" alt="Grabbo " />
        <MainOverlay />
        <MessageInfoRow>
          <MessageTitle>Need a Doctor ?</MessageTitle>
          <MessageText>
            Take the first step towards building your family today and making
            your health priority. Contact us.
          </MessageText>{" "}
          <div className="lg:max-w-[450px] max-w-[750px] w-full lg:mx-0 mx-auto flex lg:flex-row flex-col gap-3">
            <PrimaryLinkButton href="contact" title="Book an appointment" />{" "}
            <SecondaryContactButton />
          </div>
        </MessageInfoRow>
      </div>
    </MessageContainer>
  )
}

const MessageContainer = twc.div`
 bg-smoothBG
w-full
items-center justify-center

`

const MessageInfoRow = twc.div`
flex flex-col items-center justify-center
relative z-[3]
max-w-[550px]
mx-auto

`
const MessageTitle = twc(MainGrabboHeader4)`
mb-1 text-white

`
const MessageText = twc(GrabboHeader6)`
mt-2 text-white max-w-[450px] mx-auto
text-center
`

const MainOverlay = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.34);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
  border-radius: inherit;
`
const ButtonMessageWrapper = twc.div`
mt-10
w-full
max-w-[450px]
mx-auto
flex flex-row gap-4
`
const MessageButton = twc(GhostButton)`
w-full
`
const MessageSecondaryButton = twc(PrimaryButton)`
w-full
`

const MessageMainImage = styled.img`
  position: absolute;
  z-index: 2;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
  border-radius: inherit;
`
export default MessageSection
