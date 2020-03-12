import { SORT_ONE, SORT_RESET } from '../constants'

export const sortOne = (key, value) => ({
  type: SORT_ONE,
  payload: { [key]: value },
})

export const sortReset = () => ({
  type: SORT_RESET,
})
