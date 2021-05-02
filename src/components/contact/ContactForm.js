import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { formButton } from '../../styles/Button'
import { FormArea, FormInput } from '../../styles/InputStyles'
import { tinyHeader } from '../../styles/TextStyles'
import Loader from '../Spinner'

const ContactForm = () => {

    const initial = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const [form, setForm] =useState(initial)
    const [loading, setLoading] =useState(false)

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
.post("url", {
    name,
    email,
    subject,
    message
})
.then(res=> {
    setForm(initial)
    setLoading(false)
})
.catch(err=>{
    setLoading(false)
})
    }
    return (
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
    )
}

const Formcover = styled.div`
width: 100%;
min-height: 600px;
margin: 24px 0;
padding: 10px 24px;
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
