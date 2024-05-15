import { useCreateTemplate } from "@/services/data/template"
import { BankCreatePayload } from "@/types/data/bank"
import { useRouter } from "next/navigation"

import { Button } from "primereact/button"
import { useFormContext } from "react-hook-form"

const ActionsArea = () => {
  const router = useRouter()
  const navigateToTemplateListPage = () => {
    router.push("/data/templates")
  }

  const form = useFormContext<BankCreatePayload>()
  const { mutate: create, isPending } = useCreateTemplate({
    onSuccess: navigateToTemplateListPage,
  })

  const handleCancel = () => {
    navigateToTemplateListPage()
  }

  const handleSubmit = form.handleSubmit(data => {
    // TODO: remove overiding description when QuillEditor is implemented
    create({ ...data, description: {} })
    // console.log(data)
  })

  return (
    <div className="flex justify-start gap-x-10 px-5">
      <Button
        outlined
        size="large"
        onClick={handleCancel}
        className="rounded-2xl text-sm"
        disabled={isPending}
      >
        取消
      </Button>
      <Button
        size="large"
        onClick={handleSubmit}
        className="rounded-2xl text-sm"
        disabled={isPending}
      >
        儲存
      </Button>
    </div>
  )
}

export default ActionsArea
