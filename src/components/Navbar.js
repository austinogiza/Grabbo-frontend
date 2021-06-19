import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { BigContainer } from '../container/Constraint'
import { mainButton } from '../styles/Button'
import logo from '../assets/logo.svg'
import { grabboColors } from '../styles/ColorStyles'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const location = useLocation()

    const clickMenu =  ()=>{
        setToggle(!toggle)

    }

    useEffect(()=>{
        setToggle(false)

    }, [location])
    return (
        <Body>
            <Container>
                <Logo>
                 <Link to='/'>
                 <Logoimg src={logo} alt="Grabbo Logo"/></Link>
                </Logo>

                <Navlinks toggle={toggle}>

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
<Book to='/contact'>Book Appointment</Book>

                </Navbutton>
                <Mobilemenu onClick={clickMenu} toggle={toggle}>
                    <Menucover toggle={toggle}>
                        <Mobiletop toggle={toggle}/>
                        <Mobilecenter toggle={toggle}/>
                        <Mobilebot toggle={toggle}/>
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
    padding: 10px 24px;
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
@media only screen and (max-width: 720px){
position: absolute;
background: ${grabboColors.white};
max-width: 90%;
width: 90%;
border-radius: 5px;
top: 10px;
left: 5%;
z-index: 998;
height: 85vh;
margin: 0 auto;
margin-top: 20px;
transition: 0.3s ease-in;
transform:  ${props=> props.toggle ? "translateY(0%)": "translateY(-900px)"};
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

@media only screen and (max-width: 720px){
    grid-template-columns: repeat(1,1fr);
}
`
const Navlinkli= styled.li`
margin:0 12px;
white-space: nowrap;
cursor: pointer;
transition: 0.3s ease-in;

.active{
    color: ${grabboColors.primary};
    font-weight: 550;
}
max-width:240px;
width: 100%;
text-align: left;
width: 100%;
@media only screen and (max-width: 720px){
    text-align: center;
}
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
white-space: nowrap;
@media only screen and (max-width: 880px){
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
z-index: 999;
@media only screen and (max-width: 720px){
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
transform : ${props => props.toggle ? "rotate(-45deg) translate(-5px, 6px)": "rotate(0)"};
transition: 0.3s ease-in;

`
const Mobilecenter = styled.span`
width:100%;
height: 3px;
background: ${grabboColors.black};
border-radius: 5px;
margin: 3px 0;
display : ${props => props.toggle ? "none": "flex"}
`
const Mobilebot = styled.span`
width:100%;
height: 3px;
background: ${grabboColors.black};
border-radius: 5px;
margin: 3px 0;
transform : ${props => props.toggle ? "rotate(45deg) translate(-4px, -3px)": "rotate(0)"};
transition: 0.3s ease-in;
`

export default Navbar
