import { UseFormProps, useForm } from "react-hook-form"
import { z } from "zod"

const UseClassroomsFormSchema = z.object({
  classroom_id: z.string().optional(),
  classroom_name: z.string().optional(),
  owner_name: z.string().optional(),
  student_name: z.string().optional(),
})

export type UseClassroomsForm = z.infer<typeof UseClassroomsFormSchema>

export const useClassroomsForm = (props?: UseFormProps<UseClassroomsForm>) => {
  return useForm(props)
}
