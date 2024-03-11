import { PhoneIcon } from "lucide-react"
import { RssIcon } from "@heroicons/react/24/solid"
interface NotFoundProps {
  name: string
  href: string
  description: string
  icon: any
}
export const NotFoundData: NotFoundProps[] = [
  {
    name: "Contact us",
    href: "/contact",
    description:
      "Our doors are open and our experts are ready to assist you with personalized care.",
    icon: PhoneIcon,
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Resources and insights.",
    icon: RssIcon,
  },
]
