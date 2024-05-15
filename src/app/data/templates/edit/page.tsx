"use client"

import dynamic from "next/dynamic"

import ActionsArea from "@/components/data/templates/create/ActionsArea"
import { EditTemplateForm } from "@/components/data/templates/edit/form"
import { useBank } from "@/components/data/templates/edit/useBank"

const TemplateInfoArea = dynamic(
  () => import("@/components/data/templates/edit/TemplateInfoArea"),
  {
    ssr: false,
  },
)

const TemplateEditPage = () => {
  const { data: templateInfo, isLoading } = useBank()

  if (isLoading) return "Loading..."

  if (!templateInfo) return "No data found."

  return (
    <EditTemplateForm defaultValue={templateInfo}>
      <TemplateInfoArea />
      <ActionsArea />
    </EditTemplateForm>
  )
}

export default TemplateEditPage
