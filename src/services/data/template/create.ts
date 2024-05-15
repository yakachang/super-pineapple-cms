import axios from "axios"

import { API_URL } from "@/constants/env"
import { Bank, BankCreatePayload } from "@/types/data/bank"
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import { useTemplates } from "./list"

export const useCreateTemplate = <T>(
  options?: UseMutationOptions<Bank, Error, BankCreatePayload, T>,
) => {
  const queryClient = useQueryClient()
  return useMutation<Bank, Error, BankCreatePayload, T>({
    mutationKey: ["create-template"],
    mutationFn: async data => {
      const response = await axios<Bank>({
        method: "POST",
        url: `${API_URL}/banks/`,
        data,
      })
      return response.data
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: [useTemplates.queryKey] })
      options?.onSuccess?.(...args)
    },
    ...options,
  })
}
