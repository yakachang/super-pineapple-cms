import { fakerZH_TW } from "@faker-js/faker"

import {
  StudentCreatePayload,
  StudentUpdatePayload,
} from "@/types/account/student"

import { getMetaData, randomAccountStatus, randomUserInfo } from "../utils"

const studnetInfoGenerator = () => ({
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

export const getStudentsResponse = () => ({
  meta: getMetaData(1, 10, 100, 10),
  data: Array(10)
    .fill(null)
    .map(() => ({
      user_id: fakerZH_TW.string.uuid(),
      email: fakerZH_TW.internet.email(),
      user_name: fakerZH_TW.person.fullName(),
      status: randomAccountStatus(),
      classroom: {
        classroom_id: fakerZH_TW.string.uuid(),
        classroom_name: `三年${Math.floor(Math.random() * 20) + 1}班`,
      },
      teacher: randomUserInfo(),
    })),
})

export const createdStudentInfoByIdResponse = (
  createInfo: StudentCreatePayload,
) => {
  const studentInfo = studnetInfoGenerator()

  return Object.assign(studentInfo, createInfo)
}

export const getStudentInfoByIdResponse = () => studnetInfoGenerator()

export const updatedStudentInfoByIdResponse = (
  updateInfo: StudentUpdatePayload,
) => {
  const studentInfo = studnetInfoGenerator()

  return Object.assign(studentInfo, updateInfo)
}
