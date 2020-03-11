import {
  ADD_STRING,
  DELETE_STRINGS,
  MARK_SINGLE_ROW,
  UN_MARK_SINGLE_ROW,
  MARK_NEXT_ROW,
  UN_MARK_NEXT_ROW,
} from '../constants'
import { deleteElementFromArray, deleteElementFromArrayByID } from '../utils'

const initialState = {
  main: [],
  marked: [],
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STRING:
      return { ...state }

    case DELETE_STRINGS:
      return {
        ...state,
        main: deleteElementFromArrayByID([...state.main], [...state.marked]),
        marked: [],
      }

    case MARK_SINGLE_ROW:
      return { ...state, marked: [action.payload] }

    case MARK_NEXT_ROW:
      return { ...state, marked: [...state.marked, action.payload] }

    case UN_MARK_SINGLE_ROW:
      return { ...state, marked: [] }

    case UN_MARK_NEXT_ROW:
      return {
        ...state,
        marked: deleteElementFromArray(state.marked, action.payload),
      }

    default:
      return state
  }
}

export default data
