import { z } from "zod"

const ClassSchema = z.object({
  classroom_id: z.string().uuid(),
  className: z.string(),
  ownerName: z.string(),
  teacherAmount: z.number(),
  studentAmount: z.number(),
  articleAmount: z.number(),
})

const ClassEditSchema = z.object({
  email: z.string(),
  username: z.string(),
  role: z.enum(["owner", "TA", "student"]),
})

const ClassroomPayloadSchema = z.object({
  classroom_name: z.string(),
})

export type Class = z.infer<typeof ClassSchema>
export type ClassEdit = z.infer<typeof ClassEditSchema>
export type ClassroomPayload = z.infer<typeof ClassroomPayloadSchema>
