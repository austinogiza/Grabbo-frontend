import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { formButton } from '../../styles/Button'
import { FormArea, FormInput } from '../../styles/InputStyles'
import { tinyHeader } from '../../styles/TextStyles'
import Loader from '../Spinner'
import {ContactURL} from '../../utils/api'

const ContactForm = () => {

    const initial = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const [form, setForm] =useState(initial)
    const [loading, setLoading] =useState(false)
    const [sent, setSent] =useState(false)




  
  
  
    useEffect(()=>{
  
axios.post('http://localhost:3005/send')
    }, [])

    const {

        name,
        email,
        subject,
        message
    } = form

    const onChange = e =>{

        const {name, value} = e.target
        setForm({...form, [name]:value})
    }
    const onSubmit = e=>{
e.preventDefault()

setLoading(true)


axios
.post(ContactURL, {
    name,
    email,
    subject,
    message
})
.then(res=> {
    setForm(initial)
    setLoading(false)
    setSent(true)
})
.catch(err=>{
    setLoading(false)
})
    }
    return (
<>

{sent ?

<></>:
<>
<Formcover>

<Form onSubmit={onSubmit}>
    <Formrow>
    <Formlabel>
        <Formtitle>Name</Formtitle>
        <FormInput type="text" value={name} name="name"  onChange={onChange}/>
    </Formlabel>
    </Formrow>
    <Formrow>
    <Formlabel>
        <Formtitle>Subject</Formtitle>
        <FormInput value={subject} name="subject" type="text"  onChange={onChange}/>
    </Formlabel>
    </Formrow>
    <Formrow>
    <Formlabel>
        <Formtitle>Email</Formtitle>
        <FormInput value={email} name="email"  type="email" onChange={onChange}/>
    </Formlabel>
    </Formrow>
    <Formrow>
    <Formlabel>
        <Formtitle>Message</Formtitle>
        <FormArea value={message} name="message" onChange={onChange} />
    </Formlabel>
    </Formrow>
    <Formrow>
    <SubmitButton>
    {loading ? <Loader/>: "Submit "}
    </SubmitButton>
    </Formrow>
</Form>
</Formcover>
</>
}
</>
   
    )
}

const Formcover = styled.div`
width: 100%;
min-height: 600px;
margin: 24px 0;

grid-area: Form;
`
const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`
const Formlabel = styled.label`
min-height: 60px;
width: 100%;
display: flex;
flex-direction: column;

`
const Formtitle = styled(tinyHeader)`
margin: 16px 0;
`
const Formrow = styled.div`
margin: 16px 0;
`
const SubmitButton = styled(formButton)`
margin: 0;
`

export default ContactForm
