import { ComponentProps, forwardRef } from "react"

import { InputText, InputTextProps } from "primereact/inputtext"

type InputTemplateProps = {
  title: string
  tailwindClass?: string
} & InputTextProps

const InputTemplate = (
  props: InputTemplateProps,
  ref: ComponentProps<typeof InputText>["ref"],
) => {
  const { title, tailwindClass, ...inputTextProps } = props

  return (
    <div className={["flex flex-col gap-1 w-full", tailwindClass].join(" ")}>
      <label>{title}</label>
      <InputText ref={ref} {...inputTextProps} />
    </div>
  )
}

export default forwardRef(InputTemplate)
