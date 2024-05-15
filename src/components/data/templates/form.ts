import { BankStatusSchema } from "@/types/data/bank"
import { UseFormProps, useForm } from "react-hook-form"
import { z } from "zod"

const UseTemplatesFormSchema = z.object({
  bank_id: z.string().optional(),
  title: z.string().optional(),
  source: z.string().optional(),
  status: BankStatusSchema.optional(),
})

export type UseTemplatesForm = z.infer<typeof UseTemplatesFormSchema>

export const useTemplatesForm = (props?: UseFormProps<UseTemplatesForm>) => {
  return useForm(props)
}
