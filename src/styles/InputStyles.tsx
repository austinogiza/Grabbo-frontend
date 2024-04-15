import { twc } from "react-twc"
export const CurrencyFormPrimary = twc.input`
flex
h-11
 w-full rounded-xl
 border border-input
 pl-14
 mt-1
 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
shadow-sm
:placeholder{
    font-normal

    text-gray-700
}

`
export const FormPrimary = twc.input`
flex
h-11
 w-full rounded-xl
 border border-input
 mt-1
 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-white file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
shadow-sm

`
export const FormTextAreaPrimary = twc.textarea`
flex
h-32
bg-white
 w-full rounded-xl
 border border-input
 mt-1
 resize-none
 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
shadow-sm


`
export const FormSelectPrimary = twc.select`

flex
h-11
 w-full rounded-xl
 border border-input
bg-white
 mt-1
 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
shadow-sm


`
export const DashboardFormMainLabel = twc.label`
bg-white
text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-5
`

export const FormPrimarySelect = twc.select`
flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
bg-white
`
