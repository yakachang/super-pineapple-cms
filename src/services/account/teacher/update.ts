import { API_URL } from "@/constants/env"
import { Teacher, TeacherPayload } from "@/types"
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import axios from "axios"
import { useTeacher } from "./get"
import { useTeachers } from "../teacher"

export const useUpdateTeacher = <T>(
  teacherId: string,
  options?: UseMutationOptions<Teacher, Error, TeacherPayload, T>,
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["teacher-update"],
    mutationFn: async (teacher: TeacherPayload) => {
      return (
        await axios.put<Teacher>(
          `${API_URL}/users/teachers/${teacherId}`,
          teacher,
        )
      ).data
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: [useTeacher.queryKey, teacherId],
      })
      queryClient.invalidateQueries({ queryKey: [useTeachers.queryKey] })
      options?.onSuccess?.(...args)
    },
    ...options,
  })
}
