import React from 'react'
import styled from 'styled-components'
const FooterTop = () => {
    return (
        <Top>

<FooterContainer>
<Section>

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
grid-template-columns: repeat(4,1fr);
grid-gap: 36px;

`
const Section = styled.div`

`
export default FooterTop
