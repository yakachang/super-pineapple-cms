"use client"

import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/data/classrooms/Header"), {
  ssr: false,
})
const OverviewTable = dynamic(
  () => import("@/components/data/classrooms/OverviewTable"),
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
