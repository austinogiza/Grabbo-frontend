"use client"
import { grabboColors } from "@/styles/ColorStyles"
import { GrabboHeader4, GrabboHeaderCaption } from "@/styles/TextStyles"
import { ArrowLeft } from "iconsax-react"
import Link from "next/link"
import { twc } from "react-twc"
import styled from "styled-components"

const DepartmentDetails = () => {
  return (
    <DepartmentDetailsContainer className="bg-white py-24 sm:py-32">
      <div className=" flex flex-col items-center justify-center max-w-[1320px] mx-auto">
        <ContentInfoRow>
          <Link href="/department">
            {" "}
            <BackButtonCover>
              <DepartmentArrow />
              <SiteBackButton>Back</SiteBackButton>
            </BackButtonCover>
          </Link>

          <InfoWrapper>
            <DepartmentSubText className="text-base font-semibold leading-7">
              Published 20 Jan 2024
            </DepartmentSubText>
            <DepartmentSubTextRow>Health</DepartmentSubTextRow>
          </InfoWrapper>
          <InfoNull />
        </ContentInfoRow>
        <DetailedContentContainer>
          <DepartmentDetailsTitle>
            Our medical departments
          </DepartmentDetailsTitle>
          <DepartmentMainText className="text-center mt-2 ">
            At Grabbo we are dedicated to providing exceptional healthcare
            services across a wide range of medical fields. Discover the
            comprehensive care we offer through our specialized departments.
          </DepartmentMainText>
        </DetailedContentContainer>
      </div>
      <ContentMain></ContentMain>
    </DepartmentDetailsContainer>
  )
}
const DetailedContentContainer = twc.div`
my-7
max-w-[850px]
`
const DepartmentDetailsContainer = styled.div`
  background: url("/images/backgroundpattern.webp") no-repeat center
    center/contain;
`

const ContentInfoRow = twc.div`
flex flex-row items-center justify-between gap-2
w-full

`
const InfoNull = twc.div`


`
const InfoWrapper = twc.div`
flex flex-row items-center justify-center gap-2
w-full

max-w-[360px]
`

const ContentMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${grabboColors.black};
  margin: 8px 0;
  iframe,
  video {
    width: 100%;
    max-width: 1232px !important;
    min-height: 550px !important;
    margin: 24px 0;
  }
  img {
    max-width: 1232px !important;
    width: 100%;
    object-fit: contain !important;
    min-height: 550px !important;
  }
  h1 {
    font-family: "Geist-Bold";
    font-size: 88px;
    font-weight: 500;
    line-height: 1.2;
    margin: 8px 0;
    text-align: left !important;
    @media only screen and (max-width: 800px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 650px) {
      font-size: 28px;
    }
  }
  img {
    object-fit: contain !important;
    max-width: 1100px;
    width: 100%;
    min-height: 50px;
    margin: 24px auto;
  }
  h2 {
    text-align: left !important;
    font-family: "Geist-Medium";
    font-size: 64px;
    font-weight: 500;
    margin: 8px 0;
    line-height: 1.2;
    @media only screen and (max-width: 800px) {
      font-size: 32px;
    }
  }
  h3 {
    text-align: left !important;
    margin: 8px 0;
    font-family: "Geist-Medium";
    font-size: 44px;
    font-weight: 600;
    line-height: 1.2;
    @media only screen and (max-width: 800px) {
      font-size: 32px;
    }
  }
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  blockquote,
  hr,
  table,
  tr,
  th,
  td,
  pre,
  code {
    font-family: "Geist-Medium";
    font-size: 22px;
    font-weight: 500;
    line-height: 1.5;
    margin: 8px 0;
    text-align: left !important;
    @media only screen and (max-width: 800px) {
      font-size: 18px;
    }
  }
  a {
    font-family: "Geist-Medium";
    font-size: 16px;
    font-weight: 400;
    margin: 8px 0;
    line-height: 1.6;
    color: ${grabboColors.links};
    transition: 0.3s ease-in-out;
    &:hover {
      color: ${grabboColors.accent[700]};
    }
    @media only screen and (max-width: 800px) {
      font-size: 16px;
    }
  }

  p,
  li {
    font-family: "Geist-Regular";
    font-size: 16px;
    font-weight: 400;
    margin: 8px 0;
    line-height: 1.6;
    text-align: left !important;
    color: ${grabboColors.black};
    @media only screen and (max-width: 800px) {
      font-size: 16px;
    }
  }
  strong,
  b {
    font-family: "SharpGrotesk-Medium25";
    font-weight: 600 !important;
    font-size: 18px;
  }
  img {
    width: 100%;
    max-width: 1440px;
    margin: 32px auto;
    min-height: 300px;
  }
`
const DepartmentSubText = twc(GrabboHeaderCaption)`
bg-white rounded-full px-3 py-1
`

const DepartmentSubTextRow = twc(GrabboHeaderCaption)`
flex flex-row items-center justify-center gap-2
bg-primary-50 text-primary-800  rounded-full
px-2 py-1
border-2 border-strokeColor
mb-2
`

const DepartmentDetailsTitle = twc(GrabboHeader4)`
text-center

`
const DepartmentMainText = twc.div`
text-neutral-400
`
const DepartmentArrow = twc(ArrowLeft)`
 w-5 h-5 text-primary-800
 text-primary-600
 `
const BackButtonCover = twc.div`
text-center
cursor-pointer
flex flex-row items-center justify-center gap-2
bg-primary-50 border border-primary-600 py-1 px-2 rounded-full

`
const SiteBackButton = twc(GrabboHeaderCaption)`
text-center
text-primary-600

`

export default DepartmentDetails