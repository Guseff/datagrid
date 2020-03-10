import {
  MARK_SINGLE_ROW,
  UN_MARK_SINGLE_ROW,
  MARK_NEXT_ROW,
  UN_MARK_NEXT_ROW,
} from '../constants'
import { deleteArrayElement } from '../utils'

const initialState = {
  marked: [],
}

const doings = (state = initialState, action) => {
  switch (action.type) {
    case MARK_SINGLE_ROW:
      return { ...state, marked: [action.payload] }

    case MARK_NEXT_ROW:
      return { ...state, marked: [...state.marked, action.payload] }

    case UN_MARK_SINGLE_ROW:
      return { ...state, marked: [] }

    case UN_MARK_NEXT_ROW:
      return {
        ...state,
        marked: deleteArrayElement(state.marked, action.payload),
      }

    default:
      return state
  }
}

export default doings
