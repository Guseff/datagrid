import { SORT_BY_NAME, SORT_BY_ACTIVE, FILTER_IF_ACTIVE } from '../constants'

export const sortByActive = val => {
  return {
    type: SORT_BY_ACTIVE,
    payload: val,
  }
}

export const filterIfActive = val => {
  return {
    type: FILTER_IF_ACTIVE,
    payload: val,
  }
}

export const sortByName = () => {
  return {
    type: SORT_BY_NAME,
    payload: {},
  }
}
