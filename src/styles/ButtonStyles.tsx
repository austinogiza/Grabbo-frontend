"use client"
import styled from "styled-components"
import { grabboColors } from "./ColorStyles"
import Link from "next/link"

export const PrimaryButton = styled(Link)`
  height: 44px;
  max-width: 720px;
  width: 100%;
  background: ${grabboColors.primary[600]};
  color: ${grabboColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 12px;
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
export const FormPrimaryButton = styled.button`
  height: 44px;
  max-width: 720px;
  width: 100%;
  background: ${grabboColors.primary[600]};
  color: ${grabboColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 12px;
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
  height: 44px;
  max-width: 220px;
  border-radius: 12px;
  width: 100%;
  background: ${grabboColors.white};
  color: ${grabboColors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  padding: 14px 8px;
  border: 1px solid ${grabboColors.outlineColor};
  font-family: "Geist-Medium";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  transition: 0.4s ease-in;
  box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);

  :hover {
    border: 1px solid ${grabboColors.outlineColor};
    background: ${grabboColors.dark};
    transition: 0.4s ease-in;
    color: ${grabboColors.white};
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`

export const dummyButton = styled.button`
  height: 48px;
  max-width: 180px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background: ${grabboColors.sitePrimary};
  color: ${grabboColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-family: "Geist-Medium";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  :hover {
    border: 1px solid ${grabboColors.sitePrimary};
    background: ${grabboColors.white};
    transition: 0.4s ease-in;
    color: ${grabboColors.sitePrimary};
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`

export const formButton = styled.button`
  height: 48px;
  max-width: 150px;
  border-radius: 5px;
  width: 100%;
  background: ${grabboColors.sitePrimary};
  color: ${grabboColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-family: "Geist-Medium";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  :hover {
    opacity: 0.7;
    transition: 0.4s ease-in;
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`

export const AboutSectionButton = styled.button`
  height: 64px;
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
  background-color: #ffffff1a;
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
