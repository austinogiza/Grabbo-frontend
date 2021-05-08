import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BigContainer } from '../container/Constraint'
import { mainButton } from '../styles/Button'
import logo from '../assets/logo.svg'
import { grabboColors } from '../styles/ColorStyles'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <Body>
            <Container>
                <Logo>
                    <Logoimg src={logo} alt="Grabbo Logo"/>
                </Logo>

                <Navlinks>

                    <Navlinksul>
                        <Navlinkli>
                            <NavLink exact to='/' activeClassName="active">Home</NavLink>
                        </Navlinkli>
                        <Navlinkli>
                            <NavLink exact to='/about' activeClassName="active">About</NavLink>
                        </Navlinkli>
                        <Navlinkli>
                            <NavLink  exact to='/departments' activeClassName="active">Department And Services</NavLink>
                        </Navlinkli>
                        <Navlinkli>
                            <NavLink exact to='/blog' activeClassName="active">Blog</NavLink>
                        </Navlinkli>
                        <Navlinkli>
                            <NavLink  exact to='/contact' activeClassName="active">Contact</NavLink>
                        </Navlinkli>
                    </Navlinksul>
                </Navlinks>
                <Navbutton>
<Book>Book Appointment</Book>

                </Navbutton>
                <Mobilemenu>
                    <Menucover>
                        <Mobiletop />
                        <Mobilecenter/>
                        <Mobilebot/>
                    </Menucover>
                </Mobilemenu>
            </Container>
        </Body>
    )
}

const Body= styled.div`
width: 100%;
height: 110px;

`
const Container= styled(BigContainer)`
position: relative;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-gap: 30px;

@media only screen and (max-width: 1200px){
    grid-gap: 24px;   
    padding: 10px 40px;
}
`
const Logo= styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`
const Logoimg= styled.img`
height: 57px;
width: 57px;


`
const Navlinks= styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
@media only screen and (max-width: 970px){
    display: none;
}
`
const Navlinksul= styled.ul`
width: 100%;
height: 100%;
max-width: 800px;
display: grid;
grid-template-columns: repeat(5,2fr);
justify-items: center;
align-items: center;
grid-gap: 24px;
`
const Navlinkli= styled.li`
margin:0 12px;

.active{
    color: ${grabboColors.primary};
    font-weight: 550;
}
max-width:240px;
width: 100%;
text-align: left;
width: 100%;
a{
    font-family: "Gilroy Medium";
    font-size: 16px;
font-weight: 500;
color: ${grabboColors.black};
line-height: 16px;
    max-width:240px;
width: 100%;
    
}
`
const Navbutton= styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
@media only screen and (max-width: 970px){
    display: none;
}
`
const Book= styled(mainButton)`

`

const Mobilemenu = styled.div`
width: 40px;
height: 40px;
display: none;
position: absolute;
top: 30%;
cursor: pointer;
right: 40px;
@media only screen and (max-width: 970px){
    display: block;
}

`
const Menucover = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

`
const Mobiletop = styled.span`
width:100%;
height: 3px;
background: ${grabboColors.black};
border-radius: 5px;
margin: 3px 0;
`
const Mobilecenter = styled.span`
width:100%;
height: 3px;
background: ${grabboColors.black};
border-radius: 5px;
margin: 3px 0;
`
const Mobilebot = styled.span`
width:100%;
height: 3px;
background: ${grabboColors.black};
border-radius: 5px;
margin: 3px 0;
`

export default Navbar
