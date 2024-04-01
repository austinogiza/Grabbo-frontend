import { NavbarData } from "@/data/NavbarData"
import React, { FC } from "react"
import NavbarColumn from "./NavbarColumn"
import styled from "styled-components"
import { grabboColors } from "@/styles/ColorStyles"
import NavbarButtons from "./NavbarButtons"
interface NavbarProps {
  active?: boolean
}
const NavbarMobileMenu: FC<NavbarProps> = (props) => {
  const { active } = props
  return (
    <>
      <MobileNavbarMenu active={active}>
        {" "}
        <div className="w-full flex flex-col lg:none items-center justify-between   max-w-[550px] mx-auto">
          {NavbarData.map((data, index: number) => (
            <div key={index} className="my-2">
              {" "}
              <NavbarColumn title={data.title} href={data.href} />
            </div>
          ))}
          <div className="mx-auto max-w-[500px] w-full items-center justify-center flex my-8">
            {" "}
            <NavbarButtons />
          </div>
        </div>
      </MobileNavbarMenu>
    </>
  )
}
const MobileNavbarMenu = styled.div<NavbarProps>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${grabboColors.sweetDark};
  z-index: 100;
  padding: 88px 16px 0 16px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 850px) {
    display: ${(props) => (props.active ? "flex" : "none")};
  }
`
export default NavbarMobileMenu
