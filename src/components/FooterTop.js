import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { grabboColors } from '../styles/ColorStyles'
import {FiMapPin, FiFacebook,FiInstagram, FiPhone,FiMail} from 'react-icons/fi'
import { bodyText, footerHeaderText } from '../styles/TextStyles'
import logo from '../assets/logo.svg'
const FooterTop = () => {
    return (
        <Top>

<FooterContainer>
    <Logo>
        <Logoimg src={logo}/>
        <LogoText>Grabbo fertility clinic is an ultra-modern and super specialist fertility clinic designed to facilitate the provisions of efficiency and reliable IVF services.</LogoText>
    </Logo>
<Section>
    <SectionTitle>
    <SectionHeader>About</SectionHeader>
    </SectionTitle>
    <Sectiondets>
<Sectionul>
    <Sectionli><Link to='/about'>About Us</Link></Sectionli>
    <Sectionli><Link to='/departments'>Department And Services</Link></Sectionli>
    <Sectionli><Link to='/blog'>Blog</Link></Sectionli>
    <Sectionli><Link to='/careers'>Careers</Link></Sectionli>
    <Sectionli><Link to='/contact'>Contact</Link></Sectionli>

   
</Sectionul>

    </Sectiondets>

</Section>
<Section>
    <SectionTitle>
  <SectionHeader>Information</SectionHeader>  
    </SectionTitle>
    <Sectiondets>

    <Wrapperdetails>

    <List><Icon><MapIcon/></Icon>
               <Text>Plot C83 after FCMB 1st Avenue Gwarimpa Abuja</Text>
           
               </List>
               
    <List><Icon><MapIcon/></Icon>
               <Text>No. 2 3rd Avenue, Gwarinpa, Abuja</Text>
           
               </List>
               <List>
               <LinkA href="tel:+2348080679501">

               <Icon><PhoneIcon/></Icon>
               <Text>08080679501</Text>
               </LinkA>
               </List>
               <List>
               <LinkA href="tel:+2347030703976">

               <Icon><PhoneIcon/></Icon>
               <Text>07030703976</Text>
               </LinkA>
               </List>
               <List>
              <LinkA href="mailto:contact@grabbofertilityclinic.com">
               <Icon><MailIcon/></Icon>
               <Text>contact@grabbofertilityclinic.com</Text>
               </LinkA>
               </List>
            
           </Wrapperdetails>
    </Sectiondets>

</Section>
<Section>
    <SectionTitle>
   <SectionHeader>Get in touch</SectionHeader> 
    </SectionTitle>
    <Sectiondets>
    <Footertext>
    Monday to Sunday 24 hours
    </Footertext>
    <Footertext>
    Questions or feedback?
We'd love to hear from you
    </Footertext>
    <Footersocial>
    <Wrappersocial>
               <Cover>
                  <a href="https://facebook.com/grabbodiagnosticscentre/" target="_blank" rel="noopener noreferrer"> <Facebook/></a>
               </Cover>
               <Cover>
                  <a href="https://www.instagram.com/grabbofertility/" target="_blank" rel="noopener noreferrer"> <Instagram/></a>
               </Cover>
           </Wrappersocial>
    </Footersocial>


    </Sectiondets>

</Section>

</FooterContainer>
</Top>
    )
}

const Top = styled.div`
min-height: 480px;
max-width: 1300px;
width: 100%;
margin: 0 auto;
`


const FooterContainer = styled.div`
width: 100%;
min-height: 480px;
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
grid-gap: 36px;
color: ${grabboColors.white};
justify-items: center;
align-items: center;
margin-top: 120px;
padding: 10px 24px;
@media only screen and (max-width: 1030px){
    grid-template-columns: repeat(3,1fr);
}
@media only screen and (max-width: 830px){
    grid-template-columns: repeat(2,1fr);
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
}
`
const Section = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;


`

const Logo = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
const Logoimg = styled.img`
height: 100px;
width: 100px;
cursor: pointer;

`
const LogoText = styled(bodyText)`
margin: 24px 0;
`
const SectionTitle = styled.div`
min-height:30px;
width: 100%;
`

const SectionHeader = styled(footerHeaderText)`
margin: 24px 0;
`
const Sectiondets = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

font-family: "Gilroy Regular";
font-size: 19px;
font-style: normal;
font-weight: 400;
line-height: 1.6;


@media only screen and (max-width: 650px){

    font-size: 17px;
}
`
const Sectionul = styled.div``
const Sectionli = styled.li`
margin: 8px 0;
a{
    color: ${grabboColors.white};
    transition: 0.3s ease;

    :hover{
        color: ${grabboColors.primary};
    }
}
`
const Footertext = styled(bodyText)`
margin: 8px 0;
`
const Footersocial = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
`

const Wrapperdetails = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 24px 0;
`
const List = styled.div`
width: 100%;
min-height: 30px;
margin: 8px 0;
color: ${grabboColors.white};
display: flex;
flex-direction: row;
align-items: flex-start;

@media only screen and (max-width: 650px){
    align-items: center;
    justify-content: center;
}



`

const LinkA= styled.a`
width: 100%; 
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
color: ${grabboColors.white};

${List}:hover & {
    transition: 0.3s ease-in;
    color: ${grabboColors.primary};

}
@media only screen and (max-width: 650px){
    align-items: center;
    justify-content: center;
}
`

const Text = styled(bodyText)`
color: ${grabboColors.white};
flex: 1;
width: 100%;
margin: 0 8px;

${LinkA}:hover & {
    transition: 0.3s ease-in;
    color: ${grabboColors.primary};

}
`
const Icon = styled.div`
width: 24px;
height:24px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
flex: 0 0 15%;
`

const MapIcon = styled(FiMapPin)`
width: 24px;
height:24px;
color: ${grabboColors.white};
`
const PhoneIcon = styled(FiPhone)`
width: 24px;
height:24px;
color: ${grabboColors.white
};
${LinkA}:hover & {
    transition: 0.3s ease-in;
    color: ${grabboColors.primary};

}
`
const MailIcon = styled(FiMail)`
width: 24px;
height:24px;
color: ${grabboColors.white};
${LinkA}:hover & {
    transition: 0.3s ease-in;
    color: ${grabboColors.primary};

}
`
const Wrappersocial = styled.div`
display: flex;
flex-direction: row;
margin: 24px 0;
width: 100%;
`

const Cover = styled.div`
width: 40px;
height:4px;
border-radius: 50%;
margin: 0 8px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: 0.3s ease-in;

`
const Facebook = styled(FiFacebook)`
width: 24px;
height:24px;
color: ${grabboColors.white};

transition: 0.3s ease-in;
${Cover}:hover & {
    transition: 0.3s ease-in;

    color: ${grabboColors.primary};
}
`
const Instagram = styled(FiInstagram)`
width: 24px;
height:24px;

color: ${grabboColors.white};
transition: 0.3s ease-in;
${Cover}:hover & {
    transition: 0.3s ease-in;

    color: ${grabboColors.primary};
}
`

export default FooterTop
