import React, { useState } from 'react'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { headerText, tinyCaption } from '../../styles/TextStyles'


const Gallery = () => {

    const staff = [

        {id:1, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493736/staff08_kb2egq.jpg",
        role: 'personnels'
        }, 
        {id:2, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493735/staff01_pa84ab.jpg",
        role: 'staff'
        }, 
        
        {id:3, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493735/staff03_neifwi.jpg",
        role: 'staff'
        }, 
        
        {id:4, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493758/staff05_wxs88w.jpg",
        role: 'specialguests'
        }, 

        
        {id:5, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493736/staff09_qxk0kp.jpg",
        role: 'specialguests'
        }, 
        
     
        
        {id:6, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493736/staff07_wai57q.jpg",
        role: 'facilities'
        }, 
        
        {id:7, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493735/staff04_fv5ndp.jpg",
        role: 'personnels'
        }, 

        
        {id:8, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493735/staff01_pa84ab.jpg",
        role: 'staff'
        }, 
        
        {id:9, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493736/staff02_rxr774.jpg",
        role: 'staff'
        }, 
        
        {id:10, 
        image: "https://res.cloudinary.com/drfdvwyob/image/upload/v1620493736/staff06_rforah.jpg",
        role: 'personnels'
        }, 
             
  
    ]
const [data, setData]=useState(staff)

const handleFilter = e=>{
const word = e.target.value


if(word === 'all'){
   
    setData(staff)

}

if(word === 'staff'){
    const role = staff.filter(item => item.role ==='staff')
    setData(role)

}

if(word === 'specialguests'){
    const role = staff.filter(item => item.role ==='specialguests')
    setData(role)

}

if(word === 'personnels'){
    const role = staff.filter(item => item.role ==='personnels')
    setData(role)

}
if(word === 'facilities'){
    const role = staff.filter(item => item.role ==='facilities')
    setData(role)

}




    }

    return (
<Body>

<Title>
<Subcover>   

<Subheader>Modern Hospital Facilities</Subheader></Subcover>
    <Header>Our Photo Gallery</Header>

</Title>
<Pros>
<ProTitle className="grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-2 gap-3 my-1 max-w-4xl mx-auto">

<Roles value="all" onClick={handleFilter}  className="cursor-pointer m-3 w-12 focus:outline-none py-3 rounded-xl transition  px-14 h-10 flex justify-center items-center shadow text-black font-medium  max-w-xs hover:bg-blue-600 hover:text-white">All</Roles> 
<Roles value="staff" className="cursor-pointer m-3 w-12 py-3 rounded-xl hover:bg-white-500 hover:text-white transition  px-14 h-10 flex justify-center items-center shadow font-medium focus:outline-none max-w-xs hover:bg-blue-500 bg-white text-black" onClick={handleFilter}> Staff</Roles> 
<Roles value="specialguests" onClick={handleFilter}  className="cursor-pointer w-12 py-3 shadow rounded-xl m-3 hover:text-white hover:bg-blue-500 transition px-20 h-10 flex justify-center items-center  font-medium  max-w-xs focus:outline-none bg-white text-black whitespace-nowrap">Special Guests  </Roles> 
<Roles onClick={handleFilter} className="cursor-pointer w-12 py-3 rounded-xl m-3 hover:text-white hover:bg-blue-500 transition  px-14 h-10 flex justify-center items-center shadow bg-white text-black font-medium focus:outline-none max-w-xs " value="facilities">Facilities </Roles> 
<Roles onClick={handleFilter} className="cursor-pointer w-12 py-3 shadow rounded-xl m-3 hover:text-white bg-white text-black hover:bg-blue-500 transition  px-14 h-10 flex justify-center items-center font-medium focus:outline-none max-w-xs " value="personnels">Personnels</Roles> 


</ProTitle>
<ProsGrid className="grid lg:mt-14 md:mt-6 sm:mt-10 xl:grid-cols-5 2xl:grid-cols-5 lg:grid-cols-5 gap-4 md:grid-cols-3 sm:grid-cols-2">



{data.map(image=>

    <Image className="cursor-pointer w-full max-w-md" key={image.id} src={image.image}/>

)}





</ProsGrid>

</Pros>
</Body>
    )
}


const Body = styled.div`
min-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin: 24px 0;
`
const Title = styled.div`
min-height: 50px;
display: flex;
max-width: 700px;
margin: 24px auto 0 auto;
align-items: center;
flex-direction: column;
width: 100%;
text-align: center;
`
const Header = styled(headerText)`
width: 100%;
margin: 0;

`
const Subheader = styled(tinyCaption)`
width: 100%;
margin: 24px 0;
color: ${grabboColors.primary};

`

const Subcover= styled.div`
width: 100%;
display: flex;
height: 49px;
align-items: center;
max-width: 285px;
margin: 24px auto;
border-radius: 10px;
background: ${grabboColors.light};
`
const Pros = styled.div`
width: 100%;
margin: 40px 0;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;

`

const ProTitle = styled.div`


`
const Roles = styled.button``

const ProsGrid = styled.div`

`

const Image = styled.img`
transition: 0.3s ease-in;
`
export default Gallery
