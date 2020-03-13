import { SHOW_COLUMN } from '../constants'

const initialState = {
  rank: true,
  name: true,
  mail: true,
  avatar: true,
  address: true,
  active: true,
  day: true,
}

const show = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COLUMN:
      return { ...state, [action.col]: action.status }

    default:
      return state
  }
}

export default show
