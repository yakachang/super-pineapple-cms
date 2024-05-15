import { useFormContext } from "react-hook-form"

import InputTemplate from "@/components/shared/InputTemplate"
import TextareaTemplate from "@/components/shared/TextareaTemplate"
import { BankCreatePayload } from "@/types/data/bank"

import SourceMenu from "../../SourceMenu"
import StatusMenu from "../../StatusMenu"

const TemplateContent = () => {
  const form = useFormContext<BankCreatePayload>()
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        <InputTemplate
          title="題庫ID"
          placeholder="題庫ID"
          disabled
          tailwindClass=""
        />
        <InputTemplate
          title="題庫完整名稱"
          placeholder="請輸入題庫完整名稱"
          tailwindClass=""
          {...form.register("title", { required: "請輸入題庫完整名稱" })}
          invalid={!!form.formState.errors?.title}
        />
        <InputTemplate
          title="題庫短名稱"
          placeholder="請輸入題庫短名稱"
          tailwindClass=""
          {...form.register("short_title", { required: "請輸入題庫短名稱" })}
          invalid={!!form.formState.errors?.short_title}
        />
        <InputTemplate
          type="number"
          title="字數限制"
          placeholder="請輸入字數限制"
          tailwindClass=""
          {...form.register("word_limit", {
            required: "請輸入字數限制",
            setValueAs: v => (!!v ? parseInt(v) : undefined),
          })}
          invalid={!!form.formState.errors?.word_limit}
        />
        <SourceMenu
          withAll={false}
          title="題庫出處"
          onChange={v => form.setValue("source", v!)}
        />
        <StatusMenu
          title="上架狀態"
          withAll={false}
          onChange={v => form.setValue("status", v!)}
        />
        <TextareaTemplate
          title="範文"
          tailwindClass="col-span-2"
          placeholder="請輸入範文"
          {...form.register("description", { disabled: true })}
          value={"等待 QuillEditor 實作"}
          invalid={!!form.formState.errors?.description}
        />
      </div>
      <div className="grid">
        {/* REMARK: This part is not implemented yet */}
        {/* <FileUploadComponent /> */}
      </div>
    </div>
  )
}

export default TemplateContent
