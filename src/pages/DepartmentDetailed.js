import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import Hero from "../components/Hero"
import Message from "../components/Message"
import PageLoading from "../components/PageLoading"
import { LargeContainer } from "../container/Constraint"
import { headerText } from "../styles/TextStyles"
import { DepartmentDetail } from "../utils/api"

const DepartmentDetailed = () => {
  const [data, setData] = useState([])

  const [loading, setLoading] = useState(false)
  const { slug } = useParams()

  const fetchDetail = () => {
    setLoading(true)
    axios
      .get(DepartmentDetail(slug))
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchDetail()

    document.title = `Department - Grabbo Fertility Clinic`
  }, [])

  return (
    <Body>
      {loading ? (
        <>
          <PageLoading />
        </>
      ) : (
        <>
          {data &&
            data.map((data) => (
              <>
                <Hero img={data.image} header={data.title} />
                <Container>
                  <Depart>
                    <Title>{data.title}</Title>
                    <BodyText dangerouslySetInnerHTML={{ __html: data.text }} />
                  </Depart>
                </Container>
                <Message />
              </>
            ))}
        </>
      )}
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Container = styled(LargeContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 24px;
`
const Depart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 300px;
  margin: 80px auto;

  @media only screen and (max-width: 850px) {
    margin: 40px auto;
  }
  @media only screen and (max-width: 650px) {
    margin: 24px auto;
  }
`
const Title = styled(headerText)`
  margin: 24px 0;
`
const BodyText = styled.div`
  p {
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;

    @media only screen and (max-width: 650px) {
      font-size: 17px;
    }
  }
`
export default DepartmentDetailed
