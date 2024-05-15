import { fakerZH_TW } from "@faker-js/faker"

export const getMetaData = (
  page: number,
  page_size: number,
  total_count: number,
  item_count: number,
) => ({
  page,
  page_size,
  total_count,
  item_count,
})

export const randomUserInfo = () => ({
  user_id: fakerZH_TW.string.uuid(),
  email: fakerZH_TW.internet.email(),
  user_name: fakerZH_TW.person.fullName(),
})

export const randomSampleNo = (maxId: number) => {
  return String(Math.floor(Math.random() * maxId) + 1).padStart(7, "0")
}

export const randomAccountStatus = () => {
  const random = Math.random()
  if (random < 0.7) return "activated"
  if (random < 0.9) return "deactivated"
  return "reserved"
}

/* Bank */
export const randomBankStatus = () => {
  const random = Math.random()
  if (random < 0.7) return "on"
  if (random < 0.9) return "off"
  return "pending"
}

export const randomBankSource = () => `龍騰題庫${Math.ceil(Math.random() * 10)}`
