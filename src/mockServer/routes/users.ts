import {
  getStudentsResponse,
  createdStudentInfoByIdResponse,
  getStudentInfoByIdResponse,
  updatedStudentInfoByIdResponse,
} from "../mockData/accountManagement/students"
import {
  getTeacherInfoByIdResponse,
  getTeachersResponse,
  updatedTeacherInfoByIdResponse,
} from "../mockData/accountManagement/teachers"

export default function userRouters(server: any) {
  server.get("/v1/users/teachers", () => {
    return getTeachersResponse()
  })

  server.get("/v1/users/teachers/:id", () => {
    return getTeacherInfoByIdResponse()
  })

  server.put("/v1/users/teachers/:id", (_: any, request: any) => {
    const payload = JSON.parse(request.requestBody)
    return updatedTeacherInfoByIdResponse(payload)
  })

  server.get("/v1/users/students", () => {
    return getStudentsResponse()
  })

  server.post("/v1/users/students", (_: any, request: any) => {
    const payload = JSON.parse(request.requestBody)
    return createdStudentInfoByIdResponse(payload)
  })

  server.get("/v1/users/students/:id", () => {
    return getStudentInfoByIdResponse()
  })

  server.put("/v1/users/students/:id", (_: any, request: any) => {
    const payload = JSON.parse(request.requestBody)
    return updatedStudentInfoByIdResponse(payload)
  })
}
