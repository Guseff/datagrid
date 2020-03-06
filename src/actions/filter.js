import { FILTER_IF_ACTIVE, FILTER_OFF } from '../constants'

export const filterIfActive = val => {
  return {
    type: FILTER_IF_ACTIVE,
    payload: val,
  }
}

export const filterOff = () => {
  return {
    type: FILTER_OFF,
  }
}
