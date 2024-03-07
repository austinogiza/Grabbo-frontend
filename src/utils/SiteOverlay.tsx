"use client"
import React from "react"
import styled from "styled-components"

const SiteOverlay = () => {
  return (
    <>
      <MainOverlay />
    </>
  )
}

const MainOverlay = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.44);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
`
export default SiteOverlay
