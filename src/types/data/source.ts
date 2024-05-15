import { z } from "zod"

// TODO: Change to real source data
export const SourceEnum = z.enum(["All", "出處一", "出處二", "出處三"])
export type Source = z.infer<typeof SourceEnum>
