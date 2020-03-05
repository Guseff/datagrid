import { combineReducers } from 'redux'
import data from './data'
import sorting from './sort'
import filter from './filter'
import offset from './offset'

const allRedusers = combineReducers({
  data,
  sorting,
  filter,
  offset,
})

export default allRedusers
