import {
  MARK_SINGLE_ROW,
  MARK_NEXT_ROW,
  UN_MARK_SINGLE_ROW,
  UN_MARK_NEXT_ROW,
  DELETE_STRINGS,
  SHOW_COLUMN,
} from '../constants'

export const markSingleRow = id => ({
  type: MARK_SINGLE_ROW,
  payload: id,
})

export const markNextRow = id => ({
  type: MARK_NEXT_ROW,
  payload: id,
})

export const unMarkSingleRow = id => ({
  type: UN_MARK_SINGLE_ROW,
  payload: id,
})

export const unMarkNextRow = id => ({
  type: UN_MARK_NEXT_ROW,
  payload: id,
})

export const deleteStrings = () => ({
  type: DELETE_STRINGS,
})

export const showColumn = (col, status) => ({
  type: SHOW_COLUMN,
  col,
  status,
})
