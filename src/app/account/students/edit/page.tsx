"use client"

import { Suspense } from "react"

import { ProgressSpinner } from "primereact/progressspinner"

import { StudentEditForm } from "@/components/account/students/edit"

const StudentEditPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex">
          <ProgressSpinner
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              justifySelf: "center",
            }}
          />
        </div>
      }
    >
      <StudentEditForm />
    </Suspense>
  )
}

export default StudentEditPage
