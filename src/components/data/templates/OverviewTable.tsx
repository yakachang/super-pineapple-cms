import React from "react"

import { useRouter } from "next/navigation"

import { useAtom, useAtomValue } from "jotai"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { Paginator } from "primereact/paginator"
import { match } from "ts-pattern"

import { useTemplates } from "@/services/data/template"
import { Bank } from "@/types"

import { filtersAtom, pageAtom } from "./atoms"

const PAGE_SIZE = 10

const StatusTemplate = (rowData: Bank) => {
  return (
    <>
      {match(rowData.status)
        .with("published", () => <p className="text-emerald-600">上架中</p>)
        .with("archived", () => (
          <p className="text-rose-600 font-semibold">已下架</p>
        ))
        .with("unpublished", () => (
          <p className="text-neutral-400 font-semibold">未上架</p>
        ))
        .with("All", () => (
          <p className="text-neutral-400 font-semibold">All</p>
        ))
        .exhaustive()}
    </>
  )
}

export default function OverviewTable() {
  const router = useRouter()
  const [page, setPage] = useAtom(pageAtom)
  const filters = useAtomValue(filtersAtom)
  const { data, isLoading, isError } = useTemplates({
    page,
    pageSize: PAGE_SIZE,
    filters,
  })

  const navigateToEditPage = (rowData: Bank) => {
    router.push(`/data/templates/edit?id=${rowData.bank_id}`)
  }

  const actionBodyTemplate = (rowData: Bank) => {
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

  if (!data?.data.length) return "No templates found."

  return (
    <div className="card">
      <DataTable value={data.data} rows={PAGE_SIZE}>
        <Column
          field="bank_id"
          header="題庫ID"
          style={{ width: "5%", paddingLeft: "10px" }}
        ></Column>
        <Column
          field="title"
          header="題庫名稱"
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="source"
          header="題庫出處"
          align="center"
          style={{ width: "15%" }}
        ></Column>
        <Column
          field="status"
          header="上架狀態"
          align="center"
          style={{ width: "10%" }}
          body={StatusTemplate}
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
