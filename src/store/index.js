import { createStore } from 'redux'

import allReducers from '../reducers'
import { makeData } from '../utils'

const initialState = {
  vrt: { offset: 0, virtualize: true },
  data: makeData(),
}

const store = createStore(
  allReducers,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
