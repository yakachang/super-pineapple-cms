import React from "react"

import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"

import { getMembersByClassroomIdResponse } from "@/mockServer/mockData/dataManagement/classrooms"
import { ClassEdit } from "@/types"

export default function OverviewTable() {
  const actionBodyTemplate = (rowData: ClassEdit) => {
    if (rowData.role !== "owner")
      return (
        <Button
          icon="pi pi-times"
          severity="danger"
          rounded
          outlined
          className="p-5"
          onClick={() => {}}
        />
      )
  }

  return (
    <div className="card">
      <DataTable
        value={getMembersByClassroomIdResponse()?.data}
        paginator
        rows={10}
        style={{ lineHeight: "40px" }}
      >
        <Column
          field="email"
          header="email"
          style={{ width: "20%", paddingLeft: "10px" }}
        ></Column>
        <Column
          field="user_name"
          header="成員姓名"
          align="center"
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="role"
          header="成員身份"
          align="center"
          style={{ width: "20%" }}
        ></Column>
        <Column body={actionBodyTemplate} style={{ width: "5%" }}></Column>
      </DataTable>
    </div>
  )
}
