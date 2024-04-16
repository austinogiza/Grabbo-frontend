import { PhoneIcon } from "lucide-react"
import { RssIcon } from "@heroicons/react/24/solid"
interface NavbarDataProps {
  title?: string
  href?: string
}
export const NavbarData: NavbarDataProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About us",
    href: "/about",
  },
  // {
  //   title: "Departments",
  //   href: "/department",
  // },
  {
    title: "Contact us",
    href: "/contact",
  },

  {
    title: "Blog",
    href: "/blog",
  },
]
