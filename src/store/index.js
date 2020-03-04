/* eslint no-underscore-dangle: 0 */
import { createStore } from 'redux'

import allRedusers from '../reducers'
import makeData from '../utils'

const initialState = {
  data: makeData(),
}

const store = createStore(
  allRedusers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
