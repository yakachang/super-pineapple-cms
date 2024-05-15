import { useRouter } from "next/navigation"

import { Button } from "primereact/button"

const ActionsArea = () => {
  const router = useRouter()

  const navigateToPreviousPage = () => {
    router.back()
  }

  const handleCancel = () => {
    navigateToPreviousPage()
  }

  const handleSave = () => {
    // TODO: Save the teacher info to the database
    navigateToPreviousPage()
  }

  return (
    <div className="flex justify-center gap-x-10">
      <Button
        size="large"
        onClick={handleCancel}
        className="rounded-2xl text-sm"
      >
        取消
      </Button>
      <Button
        icon="pi pi-save"
        size="large"
        onClick={handleSave}
        className="rounded-2xl"
      />
    </div>
  )
}

export default ActionsArea
