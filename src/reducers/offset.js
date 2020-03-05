import { PUT_OFFSET, SET_WINDOW_SIZE } from '../constants'

const initialState = {
  offset: 0,
  width: null,
  height: null,
}

const vrt = (state = initialState, action) => {
  switch (action.type) {
    case PUT_OFFSET:
      return { ...state, offset: action.payload }

    case SET_WINDOW_SIZE:
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height,
      }

    default:
      return state
  }
}

export default vrt
