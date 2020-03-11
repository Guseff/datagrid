import { combineReducers } from 'redux'
import data from './data'
import sort from './sort'
import filter from './filter'
import vrt from './offset'

const allReducers = combineReducers({
  data,
  sort,
  filter,
  vrt,
})

export default allReducers
