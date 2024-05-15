"use client"

import { ComponentProps, forwardRef, useState } from "react"

import {
  Dropdown,
  DropdownChangeEvent,
  DropdownProps,
} from "primereact/dropdown"

import { Source, SourceEnum } from "@/types"

type SourceMenuProps = {
  title: string
  tailwindClass?: string
  withAll?: boolean
  onChange?: (value: string | undefined) => void
} & Omit<DropdownProps, "onChange">

const SourceMenu = (
  props: SourceMenuProps,
  ref: ComponentProps<typeof Dropdown>["inputRef"],
) => {
  const {
    tailwindClass,
    title,
    onChange,
    withAll = true,
    ...dropdownProps
  } = props

  const options = withAll
    ? SourceEnum.options
    : SourceEnum.exclude(["All"]).options

  const [selectedSource, setSelectedSource] = useState<Source>(
    () => (props.defaultValue as Source) ?? options[0],
  )

  return (
    <div className={["flex flex-col gap-1 w-full", tailwindClass].join(" ")}>
      <label>{title}</label>
      <Dropdown
        inputRef={ref}
        value={selectedSource}
        onChange={e => {
          setSelectedSource(e.value)
          onChange?.(e.value)
        }}
        options={options}
        {...dropdownProps}
      />
    </div>
  )
}

export default forwardRef(SourceMenu)
