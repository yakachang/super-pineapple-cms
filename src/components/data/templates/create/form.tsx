import { PropsWithChildren } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { BankCreatePayload } from "@/types/data/bank"

export const CreateTemplateForm: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const form = useForm<BankCreatePayload>({
    defaultValues: { description: {}, source: "出處一", status: "published" },
  })

  return <FormProvider {...form}>{children}</FormProvider>
}
