"use client"
import { Suspense } from "react"

import { useSearchParams } from "next/navigation"

import { ProgressSpinner } from "primereact/progressspinner"

import { TeacherEditForm } from "@/components/account/teachers/edit"
import { useTeacher } from "@/services/account/teacher/get"

const TeacherEditPage = () => {
  const searchParams = useSearchParams()
  const teacherId = searchParams.get("id")
  const {
    data: teacher,
    isLoading,
    isError,
    error,
  } = useTeacher(teacherId || "")

  if (isLoading) return "Loading..."
  if (isError) return `Error: ${error.message}`
  if (!teacher) return "Teacher not found"
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
      <TeacherEditForm key={JSON.stringify(teacher)} defaultValues={teacher} />
    </Suspense>
  )
}

export default TeacherEditPage
