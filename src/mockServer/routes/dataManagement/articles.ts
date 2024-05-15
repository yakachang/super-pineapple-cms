import {
  getArticleByIdResponse,
  getArticlesResponse,
} from "@/mockServer/mockData/dataManagement/articles"

export default function articleRouters(server: any) {
  server.get("/v1/articles", () => {
    return getArticlesResponse()
  })

  server.get("/v1/articles/:id", () => {
    return getArticleByIdResponse()
  })
}
