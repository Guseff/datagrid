import {
  SORT_ONE,
  SORT_RESET,
  SORT_GROUP_ADD,
  SORT_GROUP_CHANGE,
  SORT_GROUP_REMOVE,
} from '../constants'

export const sortOne = (key, value) => ({
  type: SORT_ONE,
  payload: { [key]: value },
})

export const sortGroupAdd = (key, value) => ({
  type: SORT_GROUP_ADD,
  payload: { [key]: value },
})

export const sortGroupChange = (key, value) => ({
  type: SORT_GROUP_CHANGE,
  payload: { [key]: value },
})

export const sortGroupRemove = key => ({
  type: SORT_GROUP_REMOVE,
  payload: key,
})

export const sortReset = () => ({
  type: SORT_RESET,
})
