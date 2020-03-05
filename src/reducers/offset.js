import { PUT_OFFSET } from '../constants'

const initialState = {
  offset: 0,
}

const offset = (state = initialState, action) => {
  switch (action.type) {
    case PUT_OFFSET:
      return { ...state, offset: action.payload }

    default:
      return state
  }
}

export default offset
