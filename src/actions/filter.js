import { FILTER_IF_ACTIVE, FILTER_OFF, FILTER_BY_TEXT } from '../constants'

export const filterIfActive = val => ({
  type: FILTER_IF_ACTIVE,
  payload: val,
})

export const filterByText = text => ({
  type: FILTER_BY_TEXT,
  payload: text,
})

export const filterOff = () => ({
  type: FILTER_OFF,
})
