"use client"

import dynamic from "next/dynamic"

import ActionsArea from "@/components/data/templates/create/ActionsArea"
import { CreateTemplateForm } from "@/components/data/templates/create/form"

const TemplateInfoArea = dynamic(
  () => import("@/components/data/templates/create/TemplateInfoArea"),
  {
    ssr: false,
  },
)

const TeacherCreatePage = () => {
  return (
    <CreateTemplateForm>
      <TemplateInfoArea />
      <ActionsArea />
    </CreateTemplateForm>
  )
}

export default TeacherCreatePage
