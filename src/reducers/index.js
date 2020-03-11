import { combineReducers } from 'redux'
import data from './data'
import sort from './sort'
import filter from './filter'
import vrt from './offset'
// import doings from './doings'

const allReducers = combineReducers({
  data,
  sort,
  filter,
  vrt,
  // doings,
})

export default allReducers
