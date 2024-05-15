import { useFormContext } from "react-hook-form"

import InputTemplate from "@/components/shared/InputTemplate"
import TextareaTemplate from "@/components/shared/TextareaTemplate"
import { BankUpdatePayload } from "@/types/data/bank"

import { useBank } from "./useBank"
import SourceMenu from "../../SourceMenu"
import StatusMenu from "../../StatusMenu"

const TemplateContent = () => {
  const { data: templateInfo, isLoading } = useBank()
  const form = useFormContext<BankUpdatePayload>()

  if (isLoading) return "Loading..."
  if (!templateInfo) return "No data found."

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        <InputTemplate
          title="題庫ID"
          placeholder="題庫ID"
          disabled
          tailwindClass=""
          defaultValue={templateInfo.bank_id}
        />
        <InputTemplate
          title="題庫完整名稱"
          placeholder="請輸入題庫完整名稱"
          tailwindClass=""
          {...form.register("title")}
        />
        <InputTemplate
          title="題庫短名稱"
          placeholder="請輸入題庫短名稱"
          tailwindClass=""
          {...form.register("short_title")}
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
          defaultValue={templateInfo.source}
          onChange={v => form.setValue("source", v!)}
        />
        {/* <InputTemplate
          title="內容說明"
          placeholder="請輸入內容說明"
          tailwindClass=""
        /> */}
        <StatusMenu
          title="上架狀態"
          withAll={false}
          defaultValue={templateInfo?.status}
          onChange={v => form.setValue("status", v!)}
        />

        {/* wait for QuillEditor to be implemented */}
        <TextareaTemplate title="範文" tailwindClass="col-span-2" disabled />

        <InputTemplate
          title="建立時間"
          placeholder="YYYY-MM-DD 00:00:00"
          tailwindClass=""
          disabled
          value={templateInfo.created_at?.toLocaleString()}
        />
        <InputTemplate
          title="建立人員"
          placeholder="SYSTEM"
          tailwindClass=""
          disabled
          value={templateInfo.creator.user_name}
        />
        <InputTemplate
          title="最近修改時間"
          placeholder="YYYY-MM-DD 00:00:00"
          tailwindClass=""
          disabled
          value={templateInfo.updated_at?.toLocaleString()}
        />
        <InputTemplate
          title="最近修改人員"
          placeholder="SYSTEM"
          tailwindClass=""
          disabled
          value={templateInfo.updater?.user_name}
        />
      </div>
      {/* <div className="grid">
        <FileUploadComponent />
      </div> */}
    </div>
  )
}

export default TemplateContent
