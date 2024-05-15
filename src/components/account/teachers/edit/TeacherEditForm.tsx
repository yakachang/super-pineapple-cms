"use client"

import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "primereact/button"
import { useForm } from "react-hook-form"

import InputTemplate from "@/components/shared/InputTemplate"
import { useUpdateTeacher } from "@/services/account/teacher/update"
import { Teacher } from "@/types"

import {
  TeacherEditFormSchema,
  TeacherEditFormValues,
} from "./TeacherEditForm.type"
import AccountStatusMenu from "../../AccountStatusMenu"

export const TeacherEditForm = ({
  defaultValues,
}: {
  defaultValues: Teacher
}) => {
  const router = useRouter()
  const {
    data: updatedTeacher,
    mutate: update,
    isPending,
  } = useUpdateTeacher(defaultValues.user_id)

  const form = useForm<TeacherEditFormValues>({
    resolver: zodResolver(TeacherEditFormSchema),
    defaultValues,
  })

  const handleSubmit = form.handleSubmit(
    values => {
      update(values)
    },
    errors => {
      // TODO: Handle form validation errors
      console.error("TeacherEditForm Validation Error:", { errors })
    },
  )

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-y-2 gap-x-4">
      <InputTemplate
        title="教師 E-mail"
        placeholder="教師 E-mail"
        type="email"
        value={defaultValues.email}
        disabled
      />
      <InputTemplate
        title="教師姓名"
        placeholder="教師姓名"
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
        defaultValue={defaultValues.status}
        title="帳號狀態"
        onChange={value => value && form.setValue("status", value)}
        withAll={false}
      />
      <div />
      <div />
      <div className="flex flex-row items-center justify-end gap-4">
        <Button
          className="p-button-secondary"
          onClick={() => router.back()}
          disabled={isPending}
        >
          取消
        </Button>
        <Button className="p-button-primary" disabled={isPending}>
          儲存
        </Button>
      </div>
    </form>
  )
}
