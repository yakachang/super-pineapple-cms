import { z } from "zod"

import { MainPointPayloadSchema } from "./mainPoint"

export const BankStatusSchema = z.enum([
  "All",
  "published",
  "archived",
  "unpublished",
])

const UserInfo = z.object({
  email: z.string(),
  user_name: z.string(),
  user_id: z.string(),
})

export const BankSchema = z.object({
  bank_id: z.string(),
  title: z.string(),
  short_title: z.string(),
  source: z.string(),
  description: z.string(),
  example: z.string(),
  status: BankStatusSchema,
  main_point: MainPointPayloadSchema,
  created_at: z.coerce.date(),
  creator: UserInfo,
  updated_at: z.coerce.date(),
  updater: UserInfo.nullish(),
})

// TODO: replace with real Quill Editor delta object
const QuillDelta = z.object({})

const BankCreatePayloadSchema = z.object({
  title: z.string(),
  short_title: z.string(),
  source: z.string(),
  description: QuillDelta,
  word_limit: z.number(),
  status: BankStatusSchema,
})

export const BankUpdatePayloadSchema = z.object({
  title: z.string(),
  short_title: z.string(),
  source: z.string(),
  description: QuillDelta,
  word_limit: z.number(),
  status: BankStatusSchema,
})

export type Bank = z.infer<typeof BankSchema>
export type BankUpdatePayload = z.infer<typeof BankUpdatePayloadSchema>
export type BankCreatePayload = z.infer<typeof BankCreatePayloadSchema>
