import { useRouter } from "next/navigation"

import { useSetAtom } from "jotai"

import CreateBtn from "@/components/shared/buttons/CreateBtn"
import SearchBtn from "@/components/shared/buttons/SearchBtn"
import UploadBtn from "@/components/shared/buttons/UploadBtn"
import InputTemplate from "@/components/shared/InputTemplate"

import { useResetPageAtom, filtersAtom } from "./atoms"
import { useTemplatesForm } from "./form"
import SourceMenu from "../SourceMenu"
import StatusMenu from "../StatusMenu"

export default function Header() {
  const router = useRouter()
  const resetPage = useResetPageAtom()
  const setFilters = useSetAtom(filtersAtom)
  const form = useTemplatesForm()

  const handleSubmit = form.handleSubmit(data => {
    resetPage()
    setFilters(data)
  })

  const handleCreateBtnClick = () => {
    router.push("/data/templates/create")
  }

  return (
    <form className="grid grid-cols-8 gap-x-10 gap-y-5" onSubmit={handleSubmit}>
      <InputTemplate
        title="題庫ID查詢"
        placeholder="請輸入要查詢的題庫ID"
        tailwindClass="col-span-2"
        {...form.register("bank_id", {
          setValueAs: v => (!!v ? v : undefined),
        })}
      />
      <InputTemplate
        title="題庫名稱查詢"
        placeholder="請輸入要查詢的題庫名稱"
        tailwindClass="col-span-2"
        {...form.register("title", { setValueAs: v => (!!v ? v : undefined) })}
      />
      <div className="flex items-end col-span-2">
        <SearchBtn type="submit" />
      </div>
      <div className="flex items-end">
        <CreateBtn onClick={handleCreateBtnClick} />
      </div>
      <div className="flex items-end">
        <UploadBtn onClick={() => {}} />
      </div>
      <SourceMenu
        title="出處查詢"
        tailwindClass="col-span-2"
        onChange={v => form.setValue("source", v === "All" ? undefined : v)}
      />
      <StatusMenu
        title="上架狀態"
        tailwindClass="col-span-2"
        onChange={v => form.setValue("status", v === "All" ? undefined : v)}
      />
    </form>
  )
}
