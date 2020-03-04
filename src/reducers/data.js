import { ADD_STRING, DELETE_STRING } from '../constants'

const initialState = {
  data: {},
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STRING:
      return { ...state }

    case DELETE_STRING:
      return { ...state }

    default:
      return state
  }
}

export default data
