import React from "react"
import styled from "styled-components"
import { Photo } from "../../container/Constraint"
import { grabboColors } from "../../styles/ColorStyles"
import { aboutText, bigHeader } from "../../styles/TextStyles"

const Abouthero = () => {
  return (
    <Body>
      <Details>
        <Cover>
          <Title>About Us</Title>
          <Text>Grabbo Fertility Clinic & Diagnostics Centre</Text>
        </Cover>
      </Details>
      <Imagecover>
        <Image
          src="https://res.cloudinary.com/drfdvwyob/image/upload/v1619384567/grabbo-staff_ggvdeb.jpg"
          alt="Grabbo staffs"
        />
      </Imagecover>
    </Body>
  )
}

const Body = styled.div`
  max-width: 1300px;
  margin: 80px auto 40px auto;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: 650px) {
    margin: 16px auto;
    min-height: 350px;
  }
`

const Details = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 210px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Cover = styled.div`
  max-width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled(aboutText)`
  text-align: left;
  margin: 0;
`
const Text = styled(bigHeader)`
  text-align: left;
  margin: 24px 0;
  color: ${grabboColors.black};
`

const Imagecover = styled.div`
  margin: 40px auto;
  max-height: 540px;
  max-width: 1300px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    margin: 16px auto;
    height: 200px;
  }
`
const Image = styled(Photo)``
export default Abouthero
