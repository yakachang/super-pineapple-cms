import {
  createBankByIdResponse,
  getBankByIdResponse,
  getBanksResponse,
  updateBankByIdResponse,
  updateBankMainPointByIdResponse,
} from "@/mockServer/mockData/dataManagement/banks"

export default function bankRouters(server: any) {
  server.get("/v1/banks", () => {
    return getBanksResponse()
  })

  server.get("/v1/banks/:bank_id", () => {
    return getBankByIdResponse()
  })

  server.put("/v1/banks/:bank_id", (_: any, request: any) => {
    const payload = JSON.parse(request.requestBody)
    return updateBankByIdResponse(payload)
  })

  server.post("/v1/banks/:bank_id", (_: any, request: any) => {
    const payload = JSON.parse(request.requestBody)
    return createBankByIdResponse(payload)
  })

  server.delete("/v1/banks/:bank_id", (_: any, request: any) => {
    const id = request.params.bank_id
    console.log(`Deleted bank id: ${id}`)
  })

  server.put("/v1/banks/:bank_id/:main_point_id", (_: any, request: any) => {
    const payload = JSON.parse(request.requestBody)
    return updateBankMainPointByIdResponse(payload)
  })

  server.delete("/v1/banks/:bank_id/:main_point_id", (_: any, request: any) => {
    const id = request.params.bank_id
    const main_point_id = request.params.main_point_id
    console.log(`Deleted bank id: ${id}, main_point_id: ${main_point_id}`)
  })
}
