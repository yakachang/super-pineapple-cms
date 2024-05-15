import { useTemplateById } from "@/services/data/template"
import { useSearchParams } from "next/navigation"

export const useBankId = () => {
  const searchParams = useSearchParams()
  return searchParams.get("id")
}

export const useBank = () => {
  const bankId = useBankId()
  return useTemplateById(bankId!, { enabled: !!bankId })
}
