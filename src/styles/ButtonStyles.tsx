"use client"
import styled from "styled-components"
import { grabboColors } from "./ColorStyles"
import Link from "next/link"

export const PrimaryButton = styled(Link)`
  height: 48px;
  max-width: 720px;
  width: 100%;
  background: ${grabboColors.primary[600]};
  color: ${grabboColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 999px;
  font-family: "Geist-Medium";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${grabboColors.primary[800]};
    background: ${grabboColors.white};
    transition: 0.4s ease-in;
    color: ${grabboColors.sitePrimary};
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`
export const FormPrimaryButton = styled.button`
  height: 48px;
  max-width: 720px;
  width: 100%;
  background: ${grabboColors.primary[600]};
  color: ${grabboColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 999px;
  font-family: "Geist-Medium";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  :hover {
    border: 1px solid ${grabboColors.primary[800]};
    background: ${grabboColors.white};
    transition: 0.4s ease-in;
    color: ${grabboColors.sitePrimary};
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`
export const GhostButton = styled(Link)`
  height: 48px;
  max-width: 550px;
  border-radius: 999px;
  width: 100%;
  background: ${grabboColors.white};
  color: ${grabboColors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  padding: 14px 8px;
  border: 1px solid ${grabboColors.primary[600]};
  font-family: "Geist-Medium";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  transition: 0.4s ease-in;
  box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
  svg {
    transition: 0.4s ease-in;
  }
  &:hover {
    border: 1px solid ${grabboColors.primary[600]};
    background: ${grabboColors.primary[600]};
    transition: 0.4s ease-in;
    color: ${grabboColors.white};
  }
  &:hover svg {
    transition: 0.4s ease-in;
    color: ${grabboColors.white};
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`
export const GhostHrefButton = styled.button`
  height: 48px;
  max-width: 880px;
  border-radius: 999px;
  white-space: nowrap;
  width: 100%;
  background: ${grabboColors.white};
  color: ${grabboColors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  padding: 14px 8px;
  border: 1px solid ${grabboColors.primary[600]};
  font-family: "Geist-Medium";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  transition: 0.4s ease-in;
  box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
  svg {
    transition: 0.4s ease-in;
  }
  &:hover {
    border: 1px solid ${grabboColors.primary[600]};
    background: ${grabboColors.primary[600]};
    transition: 0.4s ease-in;
    color: ${grabboColors.white};
  }
  &:hover svg {
    transition: 0.4s ease-in;
    color: ${grabboColors.white};
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`
export const AboutSectionButton = styled.button`
  height: 48px;
  max-width: 720px;
  width: 100%;
  background: ${grabboColors.primary[600]};
  color: ${grabboColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 999px;
  font-family: "Geist-Medium";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  overflow: visible;
  backdrop-filter: blur(5px);
  background: #ffffff1a;
  transition: 0.4s ease-in;
  svg {
    transition: 0.4s ease-in;
    color: ${grabboColors.white};
  }
  &:hover {
    border: 1px solid ${grabboColors.primary[800]};
    background: ${grabboColors.white};
    transition: 0.4s ease-in;
    color: ${grabboColors.sitePrimary};
    svg {
      color: ${grabboColors.sitePrimary};
    }
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`
