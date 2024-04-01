import React, { FC } from "react"
import styled from "styled-components"
interface ValuesListProps {
  image?: string
  className?: string
}
const GrabboImageBox: FC<ValuesListProps> = (props) => {
  const { image, className } = props
  return (
    <>
      {" "}
      <GrabboBodyImageWrapper className={className}>
        <ImageOverlay />
        <GrabboBodyImage src={image} alt="dela image box" />
      </GrabboBodyImageWrapper>{" "}
    </>
  )
}
const GrabboBodyImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  min-height: 680px;
  max-height: 680px;
  max-width: 430px;

  position: relative;

  border-radius: 16px;
`
const GrabboBodyImage = styled.img`
  object-fit: cover;
  width: 100%;
  margin: 0 auto;
  min-height: 680px;
  max-height: 680px;
  max-width: 1232px;
  border-radius: inherit;
  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.45);
`
const ImageOverlay = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.44);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  border-radius: inherit;
`
export default GrabboImageBox
