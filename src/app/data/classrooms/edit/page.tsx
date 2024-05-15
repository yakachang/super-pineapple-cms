"use client"

import dynamic from "next/dynamic"

const Header = dynamic(
  () => import("@/components/data/classrooms/edit/Header"),
  {
    ssr: false,
  },
)
const OverviewTable = dynamic(
  () => import("@/components/data/classrooms/edit/OverviewTable"),
  { ssr: false },
)

const ClassEditPage = () => {
  return (
    <>
      <Header />
      <br />
      <OverviewTable />
    </>
  )
}

export default ClassEditPage
