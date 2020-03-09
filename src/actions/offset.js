import { PUT_OFFSET, SET_WINDOW_SIZE, VIRTUALIZE_TOGGLE } from '../constants'

export const putOffset = offset => {
  return {
    type: PUT_OFFSET,
    payload: offset,
  }
}

export const setWindowSize = (width, height) => {
  return {
    type: SET_WINDOW_SIZE,
    payload: {
      width,
      height,
    },
  }
}

export const toggleVirtualize = state => {
  return {
    type: VIRTUALIZE_TOGGLE,
    payload: state,
  }
}
