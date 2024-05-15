import { z } from "zod"

import { UserStatusSchema } from "./accountStatus"

const StudentCreatePayloadSchema = z.object({
  user_name: z.string(),
  email: z.string(),
  password: z.string(),
  status: UserStatusSchema,
})

const StudentUpdatePayloadSchema = z.object({
  user_name: z.string(),
  email: z.string(),
  status: UserStatusSchema,
  manual_subscription_end_date: z.date(),
  writining_quota: z.object({
    limit: z.number(),
    usage: z.number(),
  }),
})

export type StudentCreatePayload = z.infer<typeof StudentCreatePayloadSchema>
export type StudentUpdatePayload = z.infer<typeof StudentUpdatePayloadSchema>
