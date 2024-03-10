"use client"

import { DepartmentsData } from "@/data/DepartmentData"
import DepartmentCard from "./DepartmentCard"

const DepartmentSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Departments
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Our holistic approach to healthcare is evident in every corner of
            our facility.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {DepartmentsData.map((post) => (
            <DepartmentCard
              key={post.id}
              title={post.title}
              departmentLink={post.href}
              description={post.description}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default DepartmentSection
