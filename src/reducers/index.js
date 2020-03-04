import { combineReducers } from 'redux'
import data from './data'
import sorting from './sort'

const allRedusers = combineReducers({
  data,
  sorting,
})

export default allRedusers
