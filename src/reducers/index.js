import { combineReducers } from 'redux'
import data from './data'
import sort from './sort'
import filter from './filter'
import vrt from './offset'

const allRedusers = combineReducers({
  data,
  sort,
  filter,
  vrt,
})

export default allRedusers
