import { combineReducers } from 'redux'
import data from './data'
import sorting from './sort'
import filter from './filter'

const allRedusers = combineReducers({
  data,
  sorting,
  filter,
})

export default allRedusers
