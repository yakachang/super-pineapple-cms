import { z } from "zod"

import { UserStatusSchema } from "./accountStatus"

export const TeacherSchema = z.object({
  user_id: z.string(),
  email: z.string(),
  user_name: z.string(),
  num_classes: z.number(),
  num_students: z.number(),
  status: UserStatusSchema,
})

export const TeacherPayloadSchema = z.object({
  user_name: z.string(),
  // email: z.string(),
  status: UserStatusSchema,
  manual_subscription_end_date: z.string(),
  writing_quota: z.object({
    limit: z.number(),
    usage: z.number(),
  }),
})

export type Teacher = z.infer<typeof TeacherSchema>
export type TeacherPayload = z.infer<typeof TeacherPayloadSchema>
