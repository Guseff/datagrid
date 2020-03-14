import { PUT_OFFSET, SET_WINDOW_SIZE, VIRTUALIZE_TOGGLE } from '../constants'

const initialState = {
  offset: 0,
  scrollX: 0,
  virtualize: true,
  height: null,
}

const vrt = (state = initialState, action) => {
  switch (action.type) {
    case PUT_OFFSET:
      return { ...state, offset: action.payload, scrollX: action.scrollX }

    case VIRTUALIZE_TOGGLE:
      return { ...state, virtualize: action.payload }

    case SET_WINDOW_SIZE:
      return {
        ...state,
        height: action.payload,
      }

    default:
      return state
  }
}

export default vrt
