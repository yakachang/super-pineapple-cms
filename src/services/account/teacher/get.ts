import axios from "axios"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"

import { API_URL } from "@/constants/env"
import { Teacher } from "@/types"

const QUERY_KEY = "teacher-get"

export const useTeacher = (
  teacherId: Teacher["user_id"],
  queryOptions: Omit<UseQueryOptions<Teacher>, "queryKey"> = {},
) => {
  return useQuery<Teacher>({
    queryKey: [QUERY_KEY, teacherId],
    queryFn: async context => {
      const { data } = await axios.get<Teacher>(
        `${API_URL}/users/teachers/${context.queryKey.at(1)}`,
      )
      return data
    },
    ...queryOptions,
  })
}

useTeacher.queryKey = QUERY_KEY
