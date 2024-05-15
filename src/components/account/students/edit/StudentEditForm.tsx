"use client"

import { useRouter, useSearchParams } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "primereact/button"
import { useForm } from "react-hook-form"

import InputTemplate from "@/components/shared/InputTemplate"

import {
  StudentEditFormSchema,
  StudentEditFormValues,
} from "./StudentEditForm.type"
import AccountStatusMenu from "../../AccountStatusMenu"


export const StudentEditForm = () => {
  const searchParams = useSearchParams()
  const studentId = searchParams.get("id")
  const router = useRouter()
  /**
   * TODO: Fetch student data from the server
   */

  const form = useForm<StudentEditFormValues>({
    resolver: zodResolver(StudentEditFormSchema),

    // TODO: Replace with the fetched student data
    defaultValues: async () => ({}) as StudentEditFormValues,
  })

  const handleSubmit = form.handleSubmit(
    values => {
      // TODO: Send the updated student data to the server
    },
    errors => {
      // TODO: Handle form validation errors
      console.error("StudentEditForm Validation Error:", { errors })
    },
  )
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-y-2 gap-x-4">
      <InputTemplate
        title="學生 E-mail"
        placeholder="學生 E-mail"
        type="email"
        disabled
      />
      <InputTemplate
        title="學生姓名"
        placeholder="學生姓名"
        {...form.register("user_name")}
      />
      <InputTemplate
        title="本次訂閱開始日期"
        placeholder="本次訂閱開始日期"
        type="date"
        disabled
      />
      <InputTemplate
        title="本次訂閱結束日期"
        placeholder="本次訂閱結束日期"
        type="date"
        disabled
      />
      <InputTemplate
        title="本次訂閱付費金額"
        placeholder="本次訂閱付費金額"
        type="number"
        disabled
      />
      <InputTemplate
        title="人為調整訂閱結束日期"
        placeholder="人為調整訂閱結束日期"
        type="date"
        {...form.register("manual_subscription_end_date")}
      />
      <InputTemplate
        title="本次訂閱退費情形"
        placeholder="本次訂閱退費情形"
        type="number"
        disabled
      />
      <div />
      <InputTemplate
        title="開通 試用作文次數"
        placeholder="開通 試用作文次數"
        type="number"
        {...form.register("writing_quota.limit", { valueAsNumber: true })}
      />
      <InputTemplate
        title="已使用 試用作文次數"
        placeholder="已使用 試用作文次數"
        type="number"
        disabled
      />
      <InputTemplate
        title="建立時間"
        placeholder="建立時間"
        type="datetime-local"
        disabled
      />
      <InputTemplate title="建立人員" placeholder="建立人員" disabled />
      <InputTemplate
        title="最近修改時間"
        placeholder="最近修改時間"
        type="datetime-local"
        disabled
      />
      <InputTemplate title="最近修改人員" placeholder="最近修改人員" disabled />
      <AccountStatusMenu
        title="帳號狀態"
        withAll={false}
        onChange={v => v && form.setValue("status", v)}
      />
      <div />
      <div />
      <div className="flex flex-row items-center justify-end gap-4">
        <Button className="p-button-secondary" onClick={() => router.back()}>
          取消
        </Button>
        <Button className="p-button-primary">儲存</Button>
      </div>
    </form>
  )
}
