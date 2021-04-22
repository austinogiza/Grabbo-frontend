import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../styles/ColorStyles'
import { bodyText } from '../styles/TextStyles'
import FooterTop from './FooterTop'

const Footer = () => {
    return (
     <Body>
    <FooterTop/>
<Bottom>
<Copy>&copy; Copyright Grabbo Fertility Clinic {new Date().getFullYear()}. All Right Reserved.</Copy>
</Bottom>

     </Body>
    )
}


const Body = styled.footer`
min-height:580px;
background: ${grabboColors.black};
width: 100%;
display: flex;
flex-direction: column;
`

const Bottom = styled.div`
background:  ${grabboColors.mildBlack};
height: 100px;
max-width: 1440px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 25px;
`
const Copy = styled(bodyText)`
color:  ${grabboColors.white};
text-align: center;
`

export default Footer
