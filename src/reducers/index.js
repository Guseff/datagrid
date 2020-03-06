import { combineReducers } from 'redux'
import data from './data'
import sorting from './sort'
import filter from './filter'
import vrt from './offset'

const allRedusers = combineReducers({
  data,
  sorting,
  filter,
  vrt,
})

export default allRedusers
