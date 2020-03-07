import { SORT_BY_NAME, SORT_BY_RANK } from '../constants'

const initialState = {
  byName: undefined,
  byRank: undefined,
}

const sort = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return { ...state, byName: action.payload }

    case SORT_BY_RANK:
      return { ...state, byRank: action.payload }

    default:
      return state
  }
}

export default sort
