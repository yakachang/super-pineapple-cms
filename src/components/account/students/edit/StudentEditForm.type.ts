import { z } from "zod"

export const StudentEditFormSchema = z.object({
  user_name: z.string(),
  // email: z.string(),
  manual_subscription_end_date: z.coerce.date(),
  writing_quota: z.object({
    limit: z.number(),
    // usage: z.number(),
  }),
  status: z.string(),
})

export type StudentEditFormValues = z.infer<typeof StudentEditFormSchema>
