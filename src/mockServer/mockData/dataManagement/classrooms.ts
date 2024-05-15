import { ClassroomPayload } from "@/types"

import { getMetaData, randomSampleNo, randomUserInfo } from "../utils"

export const getClassroomsResponse = () => ({
  meta: getMetaData(1, 10, 100, 10),
  data: Array(20)
    .fill(null)
    .map(() => ({
      classroom_id: `LT_CLS_${randomSampleNo(100)}`,
      classroom_name: `三年${Math.floor(Math.random() * 20) + 1}班`,
      owner: randomUserInfo(),
      num_teachers: Math.floor(Math.random() * 20) + 1,
      num_students: Math.floor(Math.random() * 10) + 40,
      num_articles: Math.floor(Math.random() * 50),
    })),
})

export const getClassroomByIdResponse = () => ({
  classroom_id: `LT_CLS_${randomSampleNo(100)}`,
  classroom_name: `三年${Math.floor(Math.random() * 20) + 1}班`,
  owner: randomUserInfo(),
  article_score_avg: Math.floor(Math.random() * 100),
})

export const updatedClassroomInfoByIdResponse = (
  updatedInfo: ClassroomPayload,
) => ({
  classroom_id: `LT_CLS_${randomSampleNo(100)}`,
  classroom_name: updatedInfo.classroom_name,
  owner: randomUserInfo(),
  article_score_avg: Math.floor(Math.random() * 100),
})

export const getMembersByClassroomIdResponse = () => ({
  meta: getMetaData(1, 10, 100, 10),
  data: [
    {
      ...randomUserInfo(),
      role: "owner",
    },
    {
      ...randomUserInfo(),
      role: "TA",
    },
  ].concat(
    Array(Math.floor(Math.random() * 30) + 1)
      .fill(0)
      .map(() => ({
        ...randomUserInfo(),
        role: "student",
      })),
  ),
})
