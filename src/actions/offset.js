import { PUT_OFFSET, SET_WINDOW_SIZE } from '../constants'

export const putOffset = offset => {
  return {
    type: PUT_OFFSET,
    payload: offset,
  }
}

export const setWindowSize = (w, h) => {
  return {
    type: SET_WINDOW_SIZE,
    payload: {
      width: w,
      height: h,
    },
  }
}
