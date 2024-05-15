"use client"

import { ComponentProps, forwardRef, useState } from "react"

import {
  Dropdown,
  DropdownChangeEvent,
  DropdownProps,
} from "primereact/dropdown"

import { Status } from "@/types"

type StatusMenuProps = {
  title: string
  tailwindClass?: string
  withAll?: boolean
  onChange?: (value: Status) => void
  defaultValue?: Status
} & Omit<DropdownProps, "onChange">

const OPTIONS: { text: string; value: Status }[] = [
  { text: "All", value: "All" },
  { text: "上架", value: "published" },
  { text: "下架", value: "archived" },
  { text: "保留", value: "unpublished" },
]

const StatusMenu = (
  props: StatusMenuProps,
  ref: ComponentProps<typeof Dropdown>["inputRef"],
) => {
  const {
    tailwindClass,
    title,
    onChange,
    withAll = true,
    defaultValue,
    ...dropdownProps
  } = props

  const options = withAll ? OPTIONS : OPTIONS.slice(1)

  const [selectedStatus, setSelectedStatus] = useState<Status>(() => {
    return (
      options.find(o => o.value === defaultValue)?.value || options[0].value
    )
  })

  return (
    <div className={["flex flex-col gap-1 w-full", tailwindClass].join(" ")}>
      <label>{title}</label>
      <Dropdown
        inputRef={ref}
        value={selectedStatus}
        onChange={(e: DropdownChangeEvent) => {
          setSelectedStatus(e.value)
          onChange?.(e.value)
        }}
        options={options}
        optionLabel="text"
        {...dropdownProps}
      />
    </div>
  )
}

export default forwardRef(StatusMenu)
