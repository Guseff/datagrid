import { SORT_ONE, SORT_GROUP, SORT_RESET } from '../constants'

const initialState = []

const sort = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ONE:
      return [action.payload]

    case SORT_GROUP:
      return [...state].push(action.payload)

    case SORT_RESET:
      return []

    default:
      return state
  }
}

export default sort
