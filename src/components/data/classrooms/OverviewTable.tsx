import React from "react"

import { useRouter } from "next/navigation"

import { useAtom, useAtomValue } from "jotai"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { Paginator } from "primereact/paginator"

import { ClassListResponse, useClassrooms } from "@/services"

import { pageAtom, filtersAtom } from "./atoms"

const PAGE_SIZE = 10

export default function OverviewTable() {
  const [page, setPage] = useAtom(pageAtom)
  const filters = useAtomValue(filtersAtom)
  const { data, isLoading, isError } = useClassrooms({
    page,
    pageSize: PAGE_SIZE,
    filters,
  })
  const router = useRouter()

  const navigateToEditPage = (rowData: ClassListResponse) => {
    router.push(`/data/classrooms/edit?id=${rowData.classroom_id}`)
  }

  const actionBodyTemplate = (rowData: ClassListResponse) => {
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

  if (isLoading) return "Loading..."

  if (isError) return "Error!!!"

  if (!data?.data.length) return "No classroom found."

  const { data: classrooms } = data
  return (
    <div className="card">
      <DataTable value={classrooms} rows={14}>
        <Column
          field="classroom_id"
          header="班級ID"
          style={{ width: "10%", paddingLeft: "10px" }}
        ></Column>
        <Column
          field="classroom_name"
          header="班級名稱"
          align="center"
          style={{ width: "15%" }}
        ></Column>
        <Column
          field="owner.user_name"
          header="任課教師"
          align="center"
          style={{ width: "15%" }}
        ></Column>
        <Column
          field="num_teachers"
          header="教師數量"
          align="center"
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="num_students"
          header="學生數量"
          align="center"
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="num_articles"
          header="作文數量"
          align="center"
          style={{ width: "10%" }}
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
