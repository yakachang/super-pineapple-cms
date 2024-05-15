import { API_URL } from "@/constants/env"
import { PaginationOptions, usePaginationQuery } from "@/libs/pagination-query"
import { Teacher } from "@/types"

type TeacherFilters = {
  name?: string
  email?: string
  status?: string
}

const QUERY_KEY = "teacher-list"

export const useTeachers = (
  paginationOptions: PaginationOptions<TeacherFilters>,
) => {
  return usePaginationQuery<Teacher, TeacherFilters>(
    `${API_URL}/users/teachers/`,
    paginationOptions,
  )
}

useTeachers.queryKey = QUERY_KEY
