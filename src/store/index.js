import { createStore } from 'redux'

import allReducers from '../reducers'
import { getInitialState } from '../utils'

const initialState = getInitialState()

const store = createStore(
  allReducers,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
