"use client"

import { ComponentProps, forwardRef, useState } from "react"

import {
  Dropdown,
  DropdownChangeEvent,
  DropdownProps,
} from "primereact/dropdown"

import { UserStatus } from "@/types"

type AccountStatusMenuProps = {
  title: string
  tailwindClass?: string
  withAll?: boolean
  onChange?: (value: UserStatus | undefined) => void
  defaultValue?: UserStatus
} & Omit<DropdownProps, "onChange" | "defaultValue">

const OPTIONS: { text: string; value: UserStatus | undefined }[] = [
  { text: "All", value: undefined },
  { text: "啟用中", value: "activated" },
  { text: "停用中", value: "deactivated" },
  { text: "保留", value: "reserved" },
]

const AccountStatusMenu = (
  props: AccountStatusMenuProps,
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

  const [selectedAccountStatus, setSelectedAccountStatus] = useState<
    (typeof options)[number]
  >(() => {
    return options.find(o => o.value === defaultValue) || options[0]
  })

  return (
    <div className={["flex flex-col gap-1 w-full", tailwindClass].join(" ")}>
      <label>{title}</label>
      <Dropdown
        inputRef={ref}
        value={selectedAccountStatus}
        onChange={(e: DropdownChangeEvent) => {
          setSelectedAccountStatus(e.value)
          onChange?.(e.value)
        }}
        options={options}
        optionLabel="text"
        {...dropdownProps}
      />
    </div>
  )
}

export default forwardRef(AccountStatusMenu)
