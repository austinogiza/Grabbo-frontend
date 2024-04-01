import React, { FC } from "react"
import { twc } from "react-twc"
interface SpecialtyProps {
  name?: string
  description?: string
  icon?: any
}
const SpecialtyCard: FC<SpecialtyProps> = (props) => {
  const { name, description, icon } = props
  return (
    <div className="my-4 py-4">
      <div className="flex flex-row gap-4 items-center  justify-center">
        <div className=" flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          <FeatureIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
const FeatureIcon = twc.div``
export default SpecialtyCard
