import React from "react"

const TeamCard = () => {
  return (
    <div>
      {" "}
      <li>
        <img
          className="aspect-[14/13] w-full rounded-2xl object-cover"
          //   src={person.imageUrl}
          alt=""
        />
        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
          {/* {person.name} */}
        </h3>
        {/* <p className="text-base leading-7 text-gray-300">{person.role}</p>
        <p className="text-sm leading-6 text-gray-500">{person.location}</p> */}
      </li>
    </div>
  )
}

export default TeamCard
