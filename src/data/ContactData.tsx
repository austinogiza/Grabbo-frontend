import { Mail, MapPin, Phone } from "lucide-react"

interface DataProps {
  title: string
}
interface ContactProps {
  id?: number
  title?: string
  icon?: any
  data?: DataProps[]
}
export const ContactData: ContactProps[] = [
  {
    id: 1,
    title: "Email",
    icon: <Mail />,
    data: [
      { title: "contact@grabbofertilityclinic.com" },
      { title: "grabbodiagnostic@gmail.com" },
    ],
  },
  {
    id: 2,
    title: "Office",
    icon: <MapPin />,
    data: [
      { title: "Plot C83 after FCMB 1st Avenue Gwarimpa Abuja" },
      { title: "No. 2 3rd Avenue, Gwarinpa, Abuja" },
    ],
  },
  {
    id: 3,
    title: "Phone",
    icon: <Phone />,
    data: [{ title: "08080679501" }, { title: "07030703976" }],
  },
]
