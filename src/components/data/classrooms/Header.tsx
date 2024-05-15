import { useSetAtom } from "jotai"

import SearchBtn from "@/components/shared/buttons/SearchBtn"
import InputTemplate from "@/components/shared/InputTemplate"

import { useResetPageAtom, filtersAtom } from "./atoms"
import { useClassroomsForm } from "./form"

export default function Header() {
  const resetPage = useResetPageAtom()
  const setFilters = useSetAtom(filtersAtom)
  const form = useClassroomsForm()

  const handleSubmit = form.handleSubmit(data => {
    resetPage()
    setFilters(data)
  })
  return (
    <form className="grid grid-cols-5 gap-x-10 gap-y-5" onSubmit={handleSubmit}>
      <InputTemplate
        title="班級ID查詢"
        placeholder="請輸入要查詢的班級ID"
        tailwindClass="col-span-2"
        {...form.register("classroom_id")}
      />
      <InputTemplate
        title="班級查詢"
        placeholder="請輸入要查詢的班級名稱"
        tailwindClass="col-span-2"
        {...form.register("classroom_name")}
      />
      <div className="flex items-end">
        <SearchBtn type="submit" />
      </div>
      <InputTemplate
        title="教師查詢"
        placeholder="請輸入要查詢的教師姓名"
        tailwindClass="col-span-2"
        {...form.register("owner_name")}
      />
      <InputTemplate
        title="學生查詢"
        placeholder="請輸入要查詢的學生姓名"
        tailwindClass="col-span-2"
        {...form.register("student_name")}
      />
    </form>
  )
}
