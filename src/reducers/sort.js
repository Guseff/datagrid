import { SORT_BY_NAME, SORT_BY_ACTIVE } from '../constants'

const initialState = {
  sortByName: false,
  sortByActive: false,
}

const sorting = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return { ...state, sortByName: true }

    case SORT_BY_ACTIVE:
      return { ...state, sortByActive: true }

    default:
      return state
  }
}

export default sorting
