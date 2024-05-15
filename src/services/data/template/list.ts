import { UseTemplatesForm } from "@/components/data/templates/form"
import { API_URL } from "@/constants/env"
import { PaginationOptions, usePaginationQuery } from "@/libs/pagination-query"
import { Bank } from "@/types/data/bank"

const QUERY_KEY = `${API_URL}/banks/`

export type TemplateListResponse = Pick<
  Bank,
  "bank_id" | "title" | "source" | "status"
>

export const useTemplates = (
  paginationOptions: PaginationOptions<UseTemplatesForm>,
) => {
  return usePaginationQuery<TemplateListResponse, UseTemplatesForm>(
    `${API_URL}/banks/`,
    paginationOptions,
  )
}

useTemplates.queryKey = QUERY_KEY
