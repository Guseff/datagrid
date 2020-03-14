import { createStore } from 'redux'

import allReducers from '../reducers'
import { makeData } from '../utils'

const initialState = {
  vrt: { offset: 0, virtualize: true, scrollX: 0 },
  data: { main: makeData(), marked: [] },
  filter: JSON.parse(localStorage.getItem('filter')) || {
    filterIfActive: false,
    filterByText: '',
    filterByDays: [],
  },
  sort: JSON.parse(localStorage.getItem('sort')) || [],
  show: JSON.parse(localStorage.getItem('show')) || {
    rank: true,
    name: true,
    mail: true,
    avatar: true,
    address: true,
    active: true,
    day: true,
  },
}

const store = createStore(
  allReducers,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
