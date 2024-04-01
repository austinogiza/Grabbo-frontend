"use client"
import { grabboColors } from "@/styles/ColorStyles"
import React, { FC } from "react"
import styled from "styled-components"
interface NavbarProps {
  active?: boolean
  navbarClicked?: () => void
  isDark?: boolean
}
const NavbarMenuToggle: FC<NavbarProps> = (props) => {
  const { active, navbarClicked, isDark } = props
  return (
    <MenuToggleWrapper onClick={navbarClicked}>
      <MenuTopBar isDark={isDark} active={active} />
      <MenuBottomBar isDark={isDark} active={active} />
    </MenuToggleWrapper>
  )
}
const MenuToggleWrapper = styled.div`
  display: none;
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 32;
  max-width: 44px;
  width: 100%;
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
  background: ${(props) =>
    props.isDark
      ? `${grabboColors.primary[700]}`
      : `${grabboColors.primary[50]}`};
`
const MenuBottomBar = styled.div<NavbarProps>`
  height: 1px;
  width: 100%;
  max-width: 120px;
  transform: ${(props) =>
    props.active ? "rotate(-45deg) translate(2px, -3px)" : "rotate(0deg)"};
  background: ${(props) =>
    props.isDark
      ? `${grabboColors.primary[700]}`
      : `${grabboColors.primary[50]}`};
  margin: 2px 0 0 0;
`

export default NavbarMenuToggle
