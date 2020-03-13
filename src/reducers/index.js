import { combineReducers } from 'redux'
import data from './data'
import sort from './sort'
import filter from './filter'
import vrt from './offset'
import show from './show'

const allReducers = combineReducers({
  data,
  sort,
  filter,
  vrt,
  show,
})

export default allReducers
