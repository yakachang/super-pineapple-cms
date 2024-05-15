import { useRouter } from "next/navigation"

import { useSetAtom } from "jotai"

import AccountStatusMenu from "@/components/account/AccountStatusMenu"
import CreateBtn from "@/components/shared/buttons/CreateBtn"
import SearchBtn from "@/components/shared/buttons/SearchBtn"
import InputTemplate from "@/components/shared/InputTemplate"

import { filtersAtom, useResetPageAtom } from "./atoms"
import { useTeachersForm } from "./form"

export default function Header() {
  const router = useRouter()
  const resetPage = useResetPageAtom()
  const setFilters = useSetAtom(filtersAtom)
  const form = useTeachersForm()

  const handleSubmit = form.handleSubmit(data => {
    resetPage()
    setFilters(data)
  })

  const handleCreateBtnClick = () => {
    router.push("/account/teachers/create")
  }

  return (
    <form className="grid grid-cols-6 gap-x-10 gap-y-5" onSubmit={handleSubmit}>
      <InputTemplate
        title="教師email查詢"
        placeholder="請輸入要查詢的教師email"
        tailwindClass="col-span-2"
        {...form.register("email")}
      />
      <InputTemplate
        title="教師姓名查詢"
        placeholder="請輸入要查詢的教師姓名"
        tailwindClass="col-span-2"
        {...form.register("name")}
      />
      <div className="flex items-end">
        <SearchBtn type="submit" />
      </div>
      <div className="flex justify-end items-end">
        <CreateBtn type="button" onClick={handleCreateBtnClick} />
      </div>
      <AccountStatusMenu
        title="帳號狀態"
        tailwindClass="col-span-2"
        onChange={v => form.setValue("status", v)}
      />
    </form>
  )
}
