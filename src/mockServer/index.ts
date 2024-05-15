"use client"

import { createServer } from "miragejs"

import articleRouters from "./routes/dataManagement/articles"
import bankRouters from "./routes/dataManagement/banks"
import classroomRouters from "./routes/dataManagement/classrooms"
import homeworkRouters from "./routes/dataManagement/homeworks"
import userRouters from "./routes/users"

export function initMockServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    namespace: "api",

    routes() {
      this.passthrough()

      // Account Management
      userRouters(this)

      // Data Management
      articleRouters(this)
      classroomRouters(this)
      homeworkRouters(this)
      bankRouters(this)
    },
  })
}
