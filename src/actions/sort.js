import { SORT_BY_NAME, SORT_BY_RANK } from '../constants'

export const sortByRank = val => {
  return {
    type: SORT_BY_RANK,
    payload: val,
  }
}

export const sortByName = str => {
  return {
    type: SORT_BY_NAME,
    payload: str,
  }
}
