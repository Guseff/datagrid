/* eslint no-underscore-dangle: 0 */
import { createStore } from 'redux'

import allRedusers from '../reducers'
import makeData from '../utils'

const initialState = {
  vrt: { offset: 0 },
  data: makeData(),
}

const store = createStore(
  allRedusers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
