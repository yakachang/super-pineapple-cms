import {
  getHomeworksResponse,
  getHomeworkByIdResponse,
  updateHomeworkByIdResponse,
  updateHomeworkMainPointByIdResponse,
} from "@/mockServer/mockData/dataManagement/homeworks"

export default function homeworkRouters(server: any) {
  server.get("/v1/homeworks", () => {
    return getHomeworksResponse()
  })

  server.get("/v1/homeworks/:homework_id", () => {
    return getHomeworkByIdResponse()
  })

  server.put("/v1/homeworks/:homework_id", (_: any, request: any) => {
    const payload = JSON.parse(request.requestBody)
    return updateHomeworkByIdResponse(payload)
  })

  server.delete("/v1/homeworks/:homework_id", (_: any, request: any) => {
    const id = request.params.homework_id
    console.log(`Deleted homework id: ${id}`)
  })

  server.put(
    "/v1/homeworks/:homework_id/:main_point_id",
    (_: any, request: any) => {
      const payload = JSON.parse(request.requestBody)
      return updateHomeworkMainPointByIdResponse(payload)
    },
  )

  server.delete(
    "/v1/homeworks/:homework_id/:main_point_id",
    (_: any, request: any) => {
      const id = request.params.homework_id
      const main_point_id = request.params.main_point_id
      console.log(`Deleted homework id: ${id}, main_point_id: ${main_point_id}`)
    },
  )
}
