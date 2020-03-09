import { FILTER_IF_ACTIVE, FILTER_OFF, FILTER_BY_TEXT } from '../constants'

const initialState = {
  filterIfActive: false,
  filterByText: '',
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_IF_ACTIVE:
      return { ...state, filterIfActive: action.payload }

    case FILTER_BY_TEXT:
      return { ...state, filterByText: action.payload }

    case FILTER_OFF:
      return { ...state, filterIfActive: false }

    default:
      return state
  }
}

export default filter
