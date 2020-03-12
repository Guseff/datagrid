import {
  SORT_ONE,
  SORT_RESET,
  SORT_GROUP_ADD,
  SORT_GROUP_CHANGE,
  SORT_GROUP_REMOVE,
} from '../constants'
import { deleteElementFromArray } from '../utils'

const initialState = []

const sort = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ONE:
      return [action.payload]

    case SORT_GROUP_ADD:
      return [...state, action.payload]

    case SORT_GROUP_CHANGE:
      return deleteElementFromArray(
        [...state],
        state.find(x => Object.keys(x)[0] === Object.keys(action.payload)[0]),
        action.payload
      )

    case SORT_GROUP_REMOVE:
      return deleteElementFromArray(
        [...state],
        state.find(x => Object.keys(x)[0] === action.payload)
      )

    case SORT_RESET:
      return []

    default:
      return state
  }
}

export default sort
