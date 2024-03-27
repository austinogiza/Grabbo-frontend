import { PhoneIcon } from "lucide-react"
import { RssIcon } from "@heroicons/react/24/solid"
interface NavbarDataProps {
  name?: string
  href?: string
}
export const NavbarData: NavbarDataProps[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Departments",
    href: "/department",
  },
  {
    name: "Contact us",
    href: "/contact",
  },

  {
    name: "Blog",
    href: "/blog",
  },
]
