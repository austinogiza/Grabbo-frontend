import React, { FC } from "react"
import { twc } from "react-twc"
interface FeaturesProps {
  name?: string
  description?: string
  icon?: any
}
const FeaturesCard: FC<FeaturesProps> = (props) => {
  const { name, description, icon } = props
  return (
    <div className="relative pl-9">
      <div className="flex flex-row items-center justify-start">
        <FeaturesIcon>
          <FeaturesImageIcon src={icon} alt={`Grabbo ${name}`} />
        </FeaturesIcon>

        <FeaturesCardTitle> {name}</FeaturesCardTitle>
      </div>{" "}
      <div className="mt-2">
        <FeaturesText>{description}</FeaturesText>
      </div>
    </div>
  )
}
const FeaturesIcon = twc.div`
items-center justify-center flex w-10 h-10  rounded-[10px]
bg-primary-50
border border-primary-500
`
const FeaturesImageIcon = twc.img`
 w-6 h-6
`

const FeaturesCardTitle = twc.div`
ml-2
`

const FeaturesText = twc.div``
export default FeaturesCard
