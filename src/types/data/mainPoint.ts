import { z } from "zod"

export const MainPointPayloadSchema = z.object({
  overall: z.string(),
  content: z.string(),
  pic1: z.string(),
  pic2: z.string(),
  pic3: z.string(),
})

export type MainPointPayload = z.infer<typeof MainPointPayloadSchema>
