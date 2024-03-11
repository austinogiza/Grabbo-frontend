import React from "react"

const SiteDivider = () => {
  return (
    <>
      {" "}
      <div className="relative pt-22 md:pt-18 flex flex-col min-h-screen overflow-hidden">
        <div className="absolute top-0 left-1/2 bottom-0 flex justify-between w-[81rem] -translate-x-1/2 pointer-events-none 3xl:w-[75rem] lxl:left-6 lxl:right-6 lxl:w-auto lxl:translate-x-0 md:left-4.5 md:right-4.5">
          {Array.from(Array(5).keys()).map((x) => (
            <div
              className="w-0.25 bg-repeat bg-[length:100%_.5rem] opacity-60"
              key={x}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SiteDivider
