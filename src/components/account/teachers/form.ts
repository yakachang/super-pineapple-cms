import { UseFormProps, useForm } from "react-hook-form"
import { z } from "zod"

const UseTeachersFormSchema = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
})

type UseTeachersForm = z.infer<typeof UseTeachersFormSchema>

export const useTeachersForm = (props?: UseFormProps<UseTeachersForm>) => {
  return useForm(props)
}
