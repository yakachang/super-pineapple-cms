import { UseClassroomsForm } from "@/components/data/classes/form"
import { API_URL } from "@/constants/env"
import { PaginationOptions, usePaginationQuery } from "@/libs/pagination-query"

export type ClassListResponse = {
  classroom_id: string
  classroom_name: string
  owner: {
    user_id: string
    email: string
    user_name: string
  }
  num_teachers: number
  num_students: number
  num_articles: number
}

export const useClassrooms = (
  paginationOptions: PaginationOptions<UseClassroomsForm>,
) => {
  return usePaginationQuery<ClassListResponse, UseClassroomsForm>(
    `${API_URL}/classrooms/`,
    paginationOptions,
  )
}
