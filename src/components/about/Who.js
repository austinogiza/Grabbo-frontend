import React from 'react'
import styled from 'styled-components'
import { grabboColors } from '../../styles/ColorStyles'
import { bodyText,headerText } from '../../styles/TextStyles'

const Who = () => {
    return (
        <Body>
            <Title>Who are we</Title>
            <Text>Grabbo Fertility Clinic® is a world-class fertility center in Gwarimpa Abuja. With more than 10 years of collective reproductive clinic experience diagnosing and treating infertility, GFC is a leading provider of IVF and fertility care in the Nigeria.
Grabbo Fertility Clinic reiterates the pledge to help all and give hope to those who have lost hope. Grabbo Fertility Clinic is ready and able to care for your little ones. With staff members who are certified in pediatric life support, we’re experienced in treating children from infancy through young adulthood.
The Grabbo Fertility Clinic Gwarinpa is an extraordinary achievement in clinical fertility care.
The brand-new, three-story reproductive center is 13,700 square feet and will offer our patients the latest fertility technology and patient comfort. With a larger, more advanced clinic, GFC will be able to help even more people with infertility or reproductive difficulties who dream of starting a family.</Text>
        </Body>
    )
}


const Body = styled.div`
max-width: 1000px;
width: 100%;
margin: 40px auto;
min-height: 340px;
display: flex;
flex-direction: column;
@media only screen and (max-width: 650px){
    margin: 8px auto;

}


`
const Title = styled(headerText)`
text-align: left;
margin: 0;
`
const Text = styled(bodyText)`
text-align: left;
margin: 24px 0;
color: ${grabboColors.grey};
`
export default Who
