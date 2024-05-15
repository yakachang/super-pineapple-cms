"use client"

import OverviewTable from "@/components/data/templates/OverviewTable"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/data/templates/Header"), {
  ssr: false,
})
// const OverviewTable = dynamic(
//   () => import("@/components/data/templates/OverviewTable"),
//   { ssr: false },
// )

export default function Home() {
  return (
    <>
      <Header />
      <br />
      <OverviewTable />
    </>
  )
}
