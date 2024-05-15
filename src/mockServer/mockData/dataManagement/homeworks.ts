import { faker, fakerZH_TW } from "@faker-js/faker"

import { HomeworkPayload } from "@/types"
import { MainPointPayload } from "@/types"

import { getMetaData, randomUserInfo } from "../utils"

const homeworkInfoGenerator = () => {
  const title = faker.lorem.sentence(5).replace(".", "")

  return {
    homework_id: faker.string.uuid(),
    owner: randomUserInfo(),
    title: title,
    short_title: title.split(" ")[0],
    source: "string", // TODO: check the candidates for source
    description: faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1),
    example: faker.lorem.paragraph(Math.floor(Math.random() * 5) + 1),
    start_time: fakerZH_TW.date.past(),
    end_time: fakerZH_TW.date.recent(),
    word_limit: Math.ceil(Math.random() * 10) * 50,
    time_limit_in_minute: Math.ceil(Math.random() * 12) * 10,
    mandatory_time_limit: Math.random() < 0.5,
    allow_delay: Math.random() < 0.5,
    perform_aes: Math.random() < 0.5,
    show_aes_grade: Math.random() < 0.5,
    create_time: fakerZH_TW.date.past(),
    update_time: fakerZH_TW.date.recent(),
    creator: randomUserInfo(),
    updater: randomUserInfo(),
    status: "string", // TODO: check the candidates for status
    main_point: mainPointGenerator(),
  }
}

export const getHomeworksResponse = () => ({
  meta: getMetaData(1, 10, 100, 10),
  data: Array(10)
    .fill(null)
    .map(() => ({
      homework_id: faker.string.uuid(),
      title: faker.lorem.sentence(5).replace(".", ""),
      source: "string", // TODO: check the candidates for source
      owner: randomUserInfo(),
    })),
})

export const getHomeworkByIdResponse = () => homeworkInfoGenerator()

export const updateHomeworkByIdResponse = (updateInfo: HomeworkPayload) => {
  const homeworkInfo = homeworkInfoGenerator()

  return Object.assign(homeworkInfo, updateInfo)
}

export const updateHomeworkMainPointByIdResponse = (
  updateInfo: MainPointPayload,
) => ({
  main_point_id: faker.string.uuid(),
  ...updateInfo,
})
