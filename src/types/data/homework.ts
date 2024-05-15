import { z } from "zod"

const HomeworkPayloadSchema = z.object({
  title: z.string(),
  short_title: z.string(),
  description: z.string(),
  example: z.string(),
  start_time: z.date(),
  end_time: z.date(),
  word_limit: z.number(),
  time_limit_in_minute: z.number(),
  mandatory_time_limit: z.boolean(),
  allow_delay: z.boolean(),
  perform_aes: z.boolean(),
  show_aes_grade: z.boolean(),
  status: z.string(),
})

export type HomeworkPayload = z.infer<typeof HomeworkPayloadSchema>
