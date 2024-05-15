"use client"

import React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { useAtom, useAtomValue } from "jotai"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { Paginator } from "primereact/paginator"
import { match } from "ts-pattern"

import { useTeachers } from "@/services/account/teacher"
import { Teacher } from "@/types"

import { filtersAtom, pageAtom } from "./atoms"

const PAGE_SIZE = 2

const LinkTemplate = (rowData: Teacher, columnName: string) => {
  const targetSubPage =
    columnName === "classInfo" ? "class-info" : "student-info"
  return (
    <Link
      href={`/account/teachers/${targetSubPage}`}
      className="no-underline text-current"
    >
      {columnName === "classInfo" ? rowData.num_classes : rowData.num_students}
    </Link>
  )
}

const AccountStatusTemplate = (rowData: Teacher) => {
  return (
    <>
      {match(rowData.status)
        .with("activated", () => <p className="text-emerald-600">啟用中</p>)
        .with("deactivated", () => (
          <p className="text-rose-600 font-semibold">停權中</p>
        ))
        .with("reserved", () => (
          <p className="text-neutral-400 font-semibold">保留</p>
        ))
        .exhaustive()}
    </>
  )
}

export default function OverviewTable() {
  const router = useRouter()
  const [page, setPage] = useAtom(pageAtom)
  const filters = useAtomValue(filtersAtom)

  const { data, isLoading, isError } = useTeachers({
    page,
    pageSize: PAGE_SIZE,
    filters,
  })

  if (isLoading) return "Loading..."

  if (isError) return "Error!!!"

  if (!data?.data.length) return "No teachers found."

  const navigateToEditPage = (rowData: Teacher) => {
    router.push(`/account/teachers/edit?id=${rowData.user_id}`)
  }

  const actionBodyTemplate = (rowData: Teacher) => {
    return (
      <Button
        icon="pi pi-file-edit"
        rounded
        outlined
        className="mr-2"
        onClick={() => navigateToEditPage(rowData)}
      />
    )
  }

  return (
    <div className="card">
      <DataTable value={data?.data} rows={14}>
        <Column field="email" header="email" style={{ width: "20%" }}></Column>
        <Column
          field="user_name"
          header="姓名"
          align="center"
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="num_classes"
          header="班級數量"
          align="center"
          body={rowData => LinkTemplate(rowData, "classInfo")}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="num_students"
          header="學生數量"
          align="center"
          body={rowData => LinkTemplate(rowData, "studentInfo")}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="status"
          header="帳號狀態"
          align="center"
          body={AccountStatusTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column body={actionBodyTemplate} style={{ width: "5%" }}></Column>
      </DataTable>
      <Paginator
        first={PAGE_SIZE * (page - 1)}
        rows={PAGE_SIZE}
        totalRecords={data.meta.total_count}
        onPageChange={p => setPage(p.page + 1)}
      />
    </div>
  )
}
