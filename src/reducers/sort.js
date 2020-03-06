import { SORT_BY_NAME, SORT_BY_RANK } from '../constants'

const initialState = {
  sortByName: false,
  sortByRank: false,
}

const sort = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return { ...state, sortByName: true }

    case SORT_BY_RANK:
      return { ...state, sortByRank: true }

    default:
      return state
  }
}

export default sort
