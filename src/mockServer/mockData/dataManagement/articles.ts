import { faker, fakerZH_TW } from "@faker-js/faker"

import { getMetaData, randomUserInfo } from "../utils"

export const getArticlesResponse = () => ({
  meta: getMetaData(1, 10, 100, 10),
  data: Array(10)
    .fill(null)
    .map(() => ({
      article_id: faker.string.uuid(),
      title: faker.lorem.sentence(5).replace(".", ""),
      owner: randomUserInfo(),
      aes_score: Math.floor(Math.random() * 100),
      manual_score: Math.floor(Math.random() * 100),
    })),
})

export const getArticleByIdResponse = () => {
  const userInfo = randomUserInfo()
  return {
    article_id: faker.string.uuid(),
    title: faker.lorem.sentence(5).replace(".", ""),
    owner: userInfo,
    aes_score: Math.floor(Math.random() * 100),
    manual_score: Math.floor(Math.random() * 100),
    content: faker.lorem.paragraph({
      min: Math.floor(Math.random() * 3) + 1,
      max: Math.floor(Math.random() * 20) + 3,
    }),
    create_time: fakerZH_TW.date.past(),
    update_time: fakerZH_TW.date.recent(),
    creator: userInfo,
    updater: userInfo,
  }
}
