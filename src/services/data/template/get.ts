"use client"

import { API_URL } from "@/constants/env"
import { Bank } from "@/types/data/bank"
import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useTemplateById = (
  id: string,
  options?: Omit<UseQueryOptions<Bank>, "queryKey" | "queryFn">,
) => {
  return useQuery({
    queryKey: ["template", id],
    queryFn: async () => {
      const { data } = await axios.get<Bank>(`${API_URL}/banks/${id}`)
      return data
    },
    ...options,
  })
}
