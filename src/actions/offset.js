import { PUT_OFFSET, SET_WINDOW_SIZE, VIRTUALIZE_TOGGLE } from '../constants'

export const putOffset = offset => ({
  type: PUT_OFFSET,
  payload: offset,
})

export const setWindowSize = height => ({
  type: SET_WINDOW_SIZE,
  payload: height,
})

export const toggleVirtualize = state => ({
  type: VIRTUALIZE_TOGGLE,
  payload: state,
})
