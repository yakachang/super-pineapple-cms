import { ComponentProps, forwardRef } from "react"

import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea"

type TextareaTemplateProps = {
  title: string
  tailwindClass?: string
} & InputTextareaProps

const TextareaTemplate = (
  props: TextareaTemplateProps,
  ref: ComponentProps<typeof InputTextarea>["ref"],
) => {
  const { title, tailwindClass, ...inputTextProps } = props

  return (
    <div className={["flex flex-col gap-1 w-full", tailwindClass].join(" ")}>
      <label>{title}</label>
      <InputTextarea ref={ref} {...inputTextProps} />
    </div>
  )
}

export default forwardRef(TextareaTemplate)
