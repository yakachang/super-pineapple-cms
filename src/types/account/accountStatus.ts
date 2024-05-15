import { z } from "zod"

export const UserStatusSchema = z.enum(["activated", "deactivated", "reserved"])
export const AccountStatusEnum = z.enum(["啟用中", "停用中", "保留"])

export type UserStatus = z.infer<typeof UserStatusSchema>
export type AccountStatus = z.infer<typeof AccountStatusEnum>
