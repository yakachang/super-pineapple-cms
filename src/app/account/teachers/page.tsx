"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { useForm } from "react-hook-form"

const Header = dynamic(() => import("@/components/account/teachers/Header"), {
  ssr: false,
})
const OverviewTable = dynamic(
  () => import("@/components/account/teachers/OverviewTable"),
  { ssr: false },
)

export default function Home() {
  return (
    <>
      <Header />
      <br />
      <OverviewTable />
    </>
  )
}
