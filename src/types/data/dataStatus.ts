import { z } from "zod"

export const StatusEnum = z.enum([
  "All",
  "published",
  "archived",
  "unpublished",
])
export type Status = z.infer<typeof StatusEnum>
