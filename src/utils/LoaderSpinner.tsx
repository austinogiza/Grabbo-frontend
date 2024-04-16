import React from "react"
import Spinner from "react-spinner-material"
const LoaderSpinner = () => {
  return (
    <div>
      <Spinner radius={12} color={"#fff"} stroke={2} visible={true} />
    </div>
  )
}

export default LoaderSpinner
