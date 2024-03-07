import { GhostButton } from "@/styles/ButtonStyles"
import { GrabboHeader7, MainGrabboHeader4 } from "@/styles/TextStyles"
import { twc } from "react-twc"

const MessageSection = () => {
  return (
    <MessageContainer>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MessageInfoRow className="lg:max-w-lg flex flex-col items-start justify-center">
            <MessageTitle className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Need a Doctor for Check-up?
            </MessageTitle>
            <MessageText className="mt-6 text-lg leading-8 text-gray-600">
              We Provide the highest level of satisfaction care & services to
              our patients.
            </MessageText>
            <MessageButtonWrapper>
              <MessageButton href="/">Make an appointment</MessageButton>
            </MessageButtonWrapper>
          </MessageInfoRow>
          <MessageImageContainer>
            <img
              src="/images/message.webp"
              alt="Grabbo "
              className="w-[48rem] max-w-none  shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </MessageImageContainer>
        </div>
      </div>
    </MessageContainer>
  )
}

const MessageContainer = twc.div`
overflow-hidden bg-smoothBG
w-full

`

const MessageInfoRow = twc.div`
flex flex-col items-start justify-center

`
const MessageTitle = twc(MainGrabboHeader4)`
mb-1

`
const MessageText = twc(GrabboHeader7)`
mt-2
`
const MessageButtonWrapper = twc.div`
mt-10
w-full
`
const MessageButton = twc(GhostButton)``

const MessageImageContainer = twc.div`
py-24 sm:py-32
`

const MessageImage = twc.img``
export default MessageSection
