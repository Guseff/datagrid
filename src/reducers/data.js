import { ADD_STRING, DELETE_STRINGS } from '../constants'

const initialState = {
  data: {},
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STRING:
      return { ...state }

    case DELETE_STRINGS:
      return { ...state }

    default:
      return state
  }
}

export default data
