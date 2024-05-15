import {
  getClassroomsResponse,
  getClassroomByIdResponse,
  updatedClassroomInfoByIdResponse,
  getMembersByClassroomIdResponse,
} from "@/mockServer/mockData/dataManagement/classrooms"

export default function classroomRouters(server: any) {
  server.get("/v1/classrooms", () => {
    return getClassroomsResponse()
  })

  server.get("/v1/classrooms/:id", () => {
    return getClassroomByIdResponse()
  })

  server.put("/v1/classrooms/:id", (_: any, request: any) => {
    const payload = JSON.parse(request.requestBody)
    return updatedClassroomInfoByIdResponse(payload)
  })

  server.delete("/v1/classrooms/:id", (_: any, request: any) => {
    const id = request.params.id
    console.log(`Deleted classroom id: ${id}`)
  })

  server.get("/v1/classrooms/:id/members", () => {
    return getMembersByClassroomIdResponse()
  })
}
