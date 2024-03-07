import { FormPrimaryButton } from "@/styles/ButtonStyles"
import { FormPrimary, FormTextAreaPrimary } from "@/styles/InputStyles"
import { twc } from "react-twc"

const Contactform = () => {
  return (
    <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              First name
            </label>
            <div className="mt-2.5">
              <ContactFormInput
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <ContactFormInput
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Email
            </label>
            <div className="mt-2.5">
              <ContactFormInput
                type="email"
                name="email"
                id="email"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <ContactFormInput
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Message
            </label>
            <div className="mt-2.5">
              <FormMessageArea name="message" id="message" />
            </div>
          </div>
        </div>
        <FormButtonWrapper>
          <FormMainButton type="submit">Send message</FormMainButton>
        </FormButtonWrapper>
      </div>
    </form>
  )
}
const ContactFormInput = twc(FormPrimary)``
const FormMessageArea = twc(FormTextAreaPrimary)``
const FormMainButton = twc(FormPrimaryButton)``
const FormButtonWrapper = twc.div`
w-full
mt-8 flex justify-end
`

export default Contactform
