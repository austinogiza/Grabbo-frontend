import { FormPrimaryButton } from "@/styles/ButtonStyles"
import { FormPrimary, FormTextAreaPrimary } from "@/styles/InputStyles"
import { twc } from "react-twc"
import { SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "sonner"
import { contactFormURL } from "@/api/constant"

interface ContactFormProps {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}
const Contactform = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    watch,
  } = useForm<ContactFormProps>()
  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    const name = data.firstName + " " + data.lastName
    const email = data.email
    const phone = data.phone
    const message = data.message

    axios
      .post(contactFormURL, { name, email, phone, message })
      .then((res) => {
        toast.success("Message sent successfully")
        reset()
      })
      .catch((err) => {
        toast.error("Message sending failed")
      })
  }
  return (
    <form
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
    >
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
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="First name"
                autoComplete="on"
                className={errors.firstName && "border-red-500"}
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
                placeholder="Last name"
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                autoComplete="family-name"
                className={errors.lastName && "border-red-500"}
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
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Your email"
                className={errors.email && "border-red-500"}
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
                id="phone-number"
                autoComplete="tel"
                placeholder="Your phone number"
                {...register("phone", {
                  required: "Phone is required",
                })}
                className={errors.phone && "border-red-500"}
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
              <FormMessageArea
                className={errors.message && "border-red-500"}
                {...register("message", {
                  required: "Message is required",
                })}
                placeholder="Your message"
                name="message"
                id="message"
              />
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
