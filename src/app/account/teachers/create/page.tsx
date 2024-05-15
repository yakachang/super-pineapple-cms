"use client"

import dynamic from "next/dynamic"

const TeacherInfoArea = dynamic(
  () => import("@/components/account/teachers/create/TeacherInfoArea"),
  {
    ssr: false,
  },
)
const ActionsArea = dynamic(
  () => import("@/components/account/teachers/create/ActionsArea"),
  {
    ssr: false,
  },
)

const TeacherCreatePage = () => {
  return (
    <>
      <TeacherInfoArea />
      <br />
      <ActionsArea />
    </>
  )
}

export default TeacherCreatePage
