import { SORT_BY_NAME, SORT_BY_ACTIVE } from '../constants'

export const sortByActive = () => {
  return {
    type: SORT_BY_ACTIVE,
    payload: {},
  }
}

export const sortByName = () => {
  return {
    type: SORT_BY_NAME,
    payload: {},
  }
}
