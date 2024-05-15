import { TeacherPayloadSchema } from "@/types"
import { z } from "zod"

export const TeacherEditFormSchema = TeacherPayloadSchema.pick({
  user_name: true,
  manual_subscription_end_date: true,
  writing_quota: true,
  status: true,
  email: true,
})

export type TeacherEditFormValues = z.infer<typeof TeacherEditFormSchema>
