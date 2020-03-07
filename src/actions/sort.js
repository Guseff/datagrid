import { SORT_BY_NAME, SORT_BY_RANK } from '../constants'

export const sortByRank = str => {
  return {
    type: SORT_BY_RANK,
    payload: str,
  }
}

export const sortByName = str => {
  return {
    type: SORT_BY_NAME,
    payload: str,
  }
}
