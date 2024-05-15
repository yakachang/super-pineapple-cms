import { fakerZH_TW } from "@faker-js/faker"

import { TeacherPayload } from "@/types"

import { getMetaData, randomAccountStatus, randomUserInfo } from "../utils"

const teacherInfoGenerator = () => ({
  user_id: fakerZH_TW.string.uuid(),
  email: fakerZH_TW.internet.email(),
  user_name: fakerZH_TW.person.fullName(),
  status: randomAccountStatus(),
  subscription: {
    start_time: fakerZH_TW.date.past(),
    end_time: fakerZH_TW.date.past(),
    manual_end_time: fakerZH_TW.date.past(),
    price: 0,
    refund: 0,
  },
  writing_quota: {
    limit: 0,
    usage: 0,
  },
  create_time: fakerZH_TW.date.past(),
  update_time: fakerZH_TW.date.recent(),
  creator: randomUserInfo(),
  updater: randomUserInfo(),
})

export const getTeachersResponse = () => ({
  meta: getMetaData(1, 10, 100, 10),
  data: Array(10)
    .fill(null)
    .map(() => ({
      user_id: fakerZH_TW.string.uuid(),
      email: fakerZH_TW.internet.email(),
      user_name: fakerZH_TW.person.fullName(),
      status: randomAccountStatus(),
      num_classes: Math.ceil(Math.random() * 5) + 5,
      num_students: Math.ceil(Math.random() * 100) + 100,
    })),
})

export const getTeacherInfoByIdResponse = () => teacherInfoGenerator()

export const updatedTeacherInfoByIdResponse = (updateInfo: TeacherPayload) => {
  const teacherInfo = teacherInfoGenerator()

  return Object.assign(teacherInfo, updateInfo)
}
