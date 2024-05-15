import { faker, fakerZH_TW } from "@faker-js/faker"

import { BankCreatePayload, BankUpdatePayload, MainPointPayload } from "@/types"

import {
  getMetaData,
  randomBankSource,
  randomBankStatus,
  randomSampleNo,
  randomUserInfo,
} from "../utils"

const bankInfoGenerator = () => {
  const title = faker.lorem.sentence(5).replace(".", "")

  return {
    bank_id: `LT_EN_${randomSampleNo(1000)}`,
    title: title,
    short_title: title.split(" ")[0],
    source: randomBankSource(),
    description: faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1),
    example: faker.lorem.paragraph(Math.floor(Math.random() * 5) + 1),
    create_time: fakerZH_TW.date.past(),
    update_time: fakerZH_TW.date.recent(),
    creator: randomUserInfo(),
    updater: randomUserInfo(),
    status: randomBankStatus(),
    main_point: mainPointGenerator(),
  }
}

export const getBanksResponse = () => ({
  meta: getMetaData(1, 10, 100, 10),
  data: Array(20)
    .fill(null)
    .map(() => ({
      bank_id: `LT_EN_${randomSampleNo(1000)}`,
      title: faker.lorem.sentence(5).replace(".", ""),
      source: randomBankSource(),
      status: randomBankStatus(),
    })),
})

export const getBankByIdResponse = () => bankInfoGenerator()

export const updateBankByIdResponse = (updateInfo: BankUpdatePayload) => {
  const bankInfo = bankInfoGenerator()

  return Object.assign(bankInfo, updateInfo)
}

export const createBankByIdResponse = (createInfo: BankCreatePayload) => {
  const bankInfo = bankInfoGenerator()

  return Object.assign(bankInfo, createInfo)
}

export const updateBankMainPointByIdResponse = (
  updateInfo: MainPointPayload,
) => ({
  main_point_id: faker.string.uuid(),
  ...updateInfo,
})
