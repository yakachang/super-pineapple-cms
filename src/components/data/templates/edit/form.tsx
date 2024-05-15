import { PropsWithChildren } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { Bank, BankUpdatePayload } from "@/types/data/bank"

export type EditTemplateFormProps = PropsWithChildren<{
  defaultValue: Bank
}>

export const EditTemplateForm: React.FC<EditTemplateFormProps> = ({
  children,
  defaultValue,
}: EditTemplateFormProps) => {
  const form = useForm<BankUpdatePayload>({
    defaultValues: defaultValue,
  })

  return <FormProvider {...form}>{children}</FormProvider>
}
