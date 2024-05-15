import { useEditTemplate } from "@/services/data/template"
import { BankCreatePayload, BankUpdatePayloadSchema } from "@/types/data/bank"
import { useRouter } from "next/navigation"

import { Button } from "primereact/button"
import { useFormContext } from "react-hook-form"
import { useBankId } from "./useBank"

const ActionsArea = () => {
  const router = useRouter()
  const form = useFormContext<BankCreatePayload>()
  const templateId = useBankId()

  const navigateToTemplateListPage = () => {
    router.push(`/data/templates`)
  }

  const { mutate: editTemplate, isPending } = useEditTemplate(
    templateId || "",
    {
      onSuccess: navigateToTemplateListPage,
    },
  )

  const handleCancel = () => {
    navigateToTemplateListPage()
  }

  const handleSave = form.handleSubmit(data => {
    editTemplate(BankUpdatePayloadSchema.parse(data))
  })

  return (
    <form className="flex justify-start gap-x-10 px-5" onSubmit={handleSave}>
      <Button
        size="large"
        onClick={handleCancel}
        className="rounded-2xl text-sm"
        disabled={isPending}
      >
        取消
      </Button>
      <Button
        size="large"
        onClick={handleSave}
        className="rounded-2xl text-sm"
        type="submit"
        disabled={isPending}
      >
        儲存
      </Button>
    </form>
  )
}

export default ActionsArea
