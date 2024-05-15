import { atom, useSetAtom } from "jotai"

const INITIAL_PAGE = 1

export const pageAtom = atom(INITIAL_PAGE)
export const useResetPageAtom = () => {
  const set = useSetAtom(pageAtom)

  return () => set(INITIAL_PAGE)
}
export const filtersAtom = atom<{
  name?: string
  email?: string
  status?: string
}>({
  name: undefined,
  email: undefined,
  status: undefined,
})
