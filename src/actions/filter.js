import {
  FILTER_IF_ACTIVE,
  FILTER_OFF,
  FILTER_BY_TEXT,
  FILTER_BY_DAYS,
} from '../constants'

export const filterIfActive = val => ({
  type: FILTER_IF_ACTIVE,
  payload: val,
})

export const filterByText = text => ({
  type: FILTER_BY_TEXT,
  payload: text,
})

export const filterByDays = arrow => ({
  type: FILTER_BY_DAYS,
  payload: arrow,
})

export const filterOff = () => ({
  type: FILTER_OFF,
})
