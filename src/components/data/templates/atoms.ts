import { atom, useSetAtom } from "jotai"
import { UseTemplatesForm } from "./form"

const INITIAL_PAGE = 1

export const pageAtom = atom(INITIAL_PAGE)
export const useResetPageAtom = () => {
  const set = useSetAtom(pageAtom)

  return () => set(INITIAL_PAGE)
}
export const filtersAtom = atom<UseTemplatesForm>({})
