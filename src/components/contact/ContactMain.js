import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { bodyText, headerText } from '../../styles/TextStyles'
import {FiMapPin, FiFacebook,FiInstagram, FiPhone,FiMail} from 'react-icons/fi'


const ContactMain = () => {
    return (
       <Body>

      <BodyCover>
      <Wrapper>
           <WrapperTitle><Title>Address</Title></WrapperTitle>
           <Wrapperdetails>
               <List><Icon><MapIcon/></Icon>
               <Text>Plot C83 after FCMB 1st Avenue Gwarimpa Abuja</Text>
               </List>
               <List><Icon><MapIcon/></Icon>
               <Text>No. 2 3rd Avenue, Gwarinpa, Abuja</Text>
               </List>
           </Wrapperdetails>
       </Wrapper>
           
       <Wrapper>
           <WrapperTitle><Title>Contact</Title></WrapperTitle>
           <Wrapperdetails>
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
       </Wrapper>
       <Wrapper>
           <WrapperTitle><Title>Social</Title></WrapperTitle>
           <Wrappersocial>
               <Cover>
                  <a href="https://facebook.com/grabbodiagnosticscentre/" target="_blank" rel="noopener noreferrer"> <Facebook/></a>
               </Cover>
               <Cover>
                  <a href="https://www.instagram.com/grabbofertility/" target="_blank" rel="noopener noreferrer"> <Instagram/></a>
               </Cover>
           </Wrappersocial>
       </Wrapper>
      </BodyCover>
       </Body>
    )
}

const Body = styled.section`
min-height: 200px;
width: 100%;
margin: 24px auto;
max-width: 900px;
padding: 10px 24px;
display: flex;
/* align-items: center;
justify-content: center; */
background: ${grabboColors.white};
`
const BodyCover = styled.div`
height: 100%;
width: 100%;
display: grid;
grid-template-columns: 2fr 1fr 1fr;
grid-gap: 80px;

@media only screen and (max-width: 1050px){
    grid-template-columns: repeat(2,1fr);
grid-gap: 24px;
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
grid-gap: 24px;
}
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

@media only screen and (max-width: 650px){
    align-items: center;

}
`
const WrapperTitle = styled.div`
width: 100%;
min-height: 30px;
margin: 0;
@media only screen and (max-width: 650px){
    display: flex;
    align-items: center;
    justify-content: center;
}
`


const Title = styled(headerText)`
color: ${grabboColors.black};
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
color: ${grabboColors.grey};
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
color: ${grabboColors.grey};

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
color: ${grabboColors.grey};
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
align-items: center;
justify-content: center;
flex: 0 0 20%;
`
const MapIcon = styled(FiMapPin)`
width: 24px;
height:24px;
color: ${grabboColors.grey};
`
const PhoneIcon = styled(FiPhone)`
width: 24px;
height:24px;
color: ${grabboColors.grey};
${LinkA}:hover & {
    transition: 0.3s ease-in;
    color: ${grabboColors.primary};

}
`
const MailIcon = styled(FiMail)`
width: 24px;
height:24px;
color: ${grabboColors.grey};
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
height:40px;
border-radius: 50%;
margin: 0 8px;
background: ${grabboColors.light};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: 0.3s ease-in;
:hover{
    transition: 0.3s ease-in;
    background: ${grabboColors.primary};
    color: ${grabboColors.white};
}
`
const Facebook = styled(FiFacebook)`
width: 24px;
height:24px;
color: ${grabboColors.black};

transition: 0.3s ease-in;
${Cover}:hover & {
    transition: 0.3s ease-in;

    color: ${grabboColors.white};
}
`
const Instagram = styled(FiInstagram)`
width: 24px;
height:24px;

color: ${grabboColors.black};
transition: 0.3s ease-in;
${Cover}:hover & {
    transition: 0.3s ease-in;

    color: ${grabboColors.white};
}
`

export default ContactMain
