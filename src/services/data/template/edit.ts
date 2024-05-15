import axios from "axios"

import { API_URL } from "@/constants/env"
import { Bank, BankUpdatePayload } from "@/types/data/bank"
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import { useTemplates } from "./list"

export const useEditTemplate = <T>(
  templateId: string,
  options?: UseMutationOptions<Bank, Error, BankUpdatePayload, T>,
) => {
  const queryClient = useQueryClient()
  return useMutation<Bank, Error, BankUpdatePayload, T>({
    mutationKey: ["edit-template"],
    mutationFn: async data => {
      const response = await axios<Bank>({
        method: "put",
        url: `${API_URL}/banks/${templateId}`,
        data,
      })
      return response.data
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: [useTemplates.queryKey] })
      queryClient.invalidateQueries({ queryKey: ["template", templateId] })
      options?.onSuccess?.(...args)
    },
    ...options,
  })
}
