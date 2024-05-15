import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { z } from "zod"

export type PaginationOptions<TFilters extends Record<string, any> = {}> = {
  page: number
  pageSize: number
  filters?: TFilters extends Record<string, any> ? TFilters : never
}

const PaginationMetadata = z.object({
  page: z.number(),
  page_size: z.number(),
  total_count: z.number(),
  item_count: z.number(),
})
const PaginationResponseTemplate = z.object({
  meta: PaginationMetadata,
  data: z.array(z.record(z.string(), z.unknown())),
})
type PaginationResponseTemplate<TData> = {
  meta: PaginationMetadata
  data: TData[]
}

type PaginationMetadata = z.infer<typeof PaginationMetadata>

const getQueryFn =
  <TData, TFilters extends Record<string, any> = {}>(
    url: string,
    paginationOptions: PaginationOptions<TFilters>,
  ) =>
  async () => {
    const response = await axios.get(url, {
      params: {
        page: paginationOptions.page,
        page_size: paginationOptions.pageSize,
        ...paginationOptions?.filters,
      },
    })

    const data = PaginationResponseTemplate.parse(
      response.data,
    ) as PaginationResponseTemplate<TData>
    return data
  }

export const usePaginationQuery = <
  TData,
  TFilters extends Record<string, any> = {},
>(
  url: string,
  paginationOptions: PaginationOptions<TFilters>,
  queryOptions?: Omit<
    UseQueryOptions<PaginationResponseTemplate<TData>, Error>,
    "queryKey" | "queryFn"
  >,
) => {
  const { page, pageSize, filters } = paginationOptions
  return useQuery({
    queryKey: [url, { page, pageSize, filters }],
    queryFn: getQueryFn<TData, TFilters>(url, paginationOptions),
    ...queryOptions,
  })
}
