"use client"
import { grabboColors } from "@/styles/ColorStyles"
import React, { FC } from "react"
import styled from "styled-components"
interface NavbarProps {
  active?: boolean
  navbarClicked?: () => void
}
const NavbarMenuToggle: FC<NavbarProps> = (props) => {
  const { active, navbarClicked } = props
  return (
    <MenuToggleWrapper onClick={navbarClicked}>
      <MenuTopBar active={active} />
      <MenuBottomBar active={active} />
    </MenuToggleWrapper>
  )
}
const MenuToggleWrapper = styled.div`
  display: none;
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 32;

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`

const MenuTopBar = styled.div<NavbarProps>`
  height: 1px;
  width: 100%;
  max-width: 120px;
  margin: 0 0 4px 0;
  transform: ${(props) =>
    props.active ? "rotate(45deg) translate(3px, 5px)" : "rotate(0deg)"};
  background: ${grabboColors.primary[500]};
`
const MenuBottomBar = styled.div<NavbarProps>`
  height: 1px;
  width: 100%;
  max-width: 120px;
  transform: ${(props) =>
    props.active ? "rotate(-45deg) translate(2px, -3px)" : "rotate(0deg)"};
  background: ${grabboColors.primary[600]};
  margin: 2px 0 0 0;
`

export default NavbarMenuToggle
