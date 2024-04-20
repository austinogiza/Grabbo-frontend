"use client"

import DepartmentCard from "./DepartmentCard"
import styled from "styled-components"
import { allDepartments } from "contentlayer/generated"

const DepartmentSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <DepartmentContainer>
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
          {allDepartments.map((post) => (
            <DepartmentCard
              key={post._id}
              title={post.name}
              departmentLink={post.slug}
              description={post.description}
              imageUrl={post.image}
            />
          ))}
        </div>
      </DepartmentContainer>
    </div>
  )
}

const DepartmentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 32px auto;
  padding: 12px 16px;
  background: url("/images/marks.svg") repeat top center/contain;
`
export default DepartmentSection
