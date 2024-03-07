import { twc } from "react-twc"
import Contactform from "./Contactform"
import ContactMap from "./ContactMap"

const ContactContent = () => {
  return (
    <ContactContainer>
      <ContentWrapper>
        <ContactMap />
        <Contactform />
      </ContentWrapper>
    </ContactContainer>
  )
}
const ContactContainer = twc.div`relative isolate bg-smoothBG`
const ContentWrapper = twc.div`mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2`
export default ContactContent
