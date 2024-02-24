import IconKeyboard from "@/components/notfound/IconKeyboard"
import { PrimaryButtonLarge } from "@/styles/ButtonStyles"
import {
  DelaColinaHeader7,
  DelaColinaHeaderCaptionLarge,
  DelaColinaHeaderCaptionRegular,
} from "@/styles/TextStyles"
import Link from "next/link"
import { twc } from "react-twc"

const NotFoundContainer = () => {
  return (
    <>
      <NotFoundCover>
        <NotFoundSectionCover>
          <NotFoundTitle>404</NotFoundTitle>
          <h2>Oops! Page not found.</h2>
          <NotFoundText>
            {"We're"} sorry, but the page you requested could not be found.
          </NotFoundText>
        </NotFoundSectionCover>
        <IconCoverRow>
          <IconKeyboard />
        </IconCoverRow>

        <Button>
          <Link href="/">Return to Home Page</Link>
        </Button>
      </NotFoundCover>
    </>
  )
}
const Button = twc(PrimaryButtonLarge)`
w-full max-w-md mx-auto mt-4
`

const NotFoundCover = twc.div`

h-screen flex flex-col items-center justify-center bg-white
`

const NotFoundSectionCover = twc.div`
space-y-4 text-center
`
const NotFoundTitle = twc(DelaColinaHeader7)`
text-4xl font-semibold text-gray-700 dark:text-gray-300
`
const NotFoundSubTitle = twc(DelaColinaHeaderCaptionLarge)`
text-4xl font-semibold text-gray-700 dark:text-gray-300
`

const NotFoundText = twc(DelaColinaHeaderCaptionRegular)`
text-gray-500 dark:text-gray-400
`

const IconCoverRow = twc.div`
my-10
`
export default NotFoundContainer
