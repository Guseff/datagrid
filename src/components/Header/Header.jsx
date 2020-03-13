import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'

import { DAYS } from '../../constants'
import {
  filterIfActive,
  toggleVirtualize,
  filterByDays,
  deleteStrings,
} from '../../actions'

import Search from '../Search'
import CheckBox from '../CheckBox/CheckBox'

const Header = () => {
  const dispatch = useDispatch()

  const activeOnly = useSelector(state => state.filter.filterIfActive)
  const virtualize = useSelector(state => state.vrt.virtualize)
  const sortedBy = useSelector(state => state.sort)
  const [selected, setSelected] = useState()

  const activeCheckHandle = () => {
    dispatch(filterIfActive(!activeOnly))
  }

  const virtualizeCheckHandle = () => {
    dispatch(toggleVirtualize(!virtualize))
  }

  const selectChange = options => {
    setSelected(options)
    dispatch(filterByDays(options))
  }

  const deleteButtonHandle = () => {
    dispatch(deleteStrings())
  }

  return (
    <div className="container my-3">
      <h3>RS School Test Data Grid With Blackjack And Girls</h3>
      <form action="\">
        <div className="row">
          <div className="col-6">
            <Search />
          </div>
          <div className="col-6">
            <span className="form-text text-muted">Select days to filter</span>
            <Select
              isMulti
              value={selected}
              onChange={selectChange}
              options={DAYS}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-8">
            Sorted by (press Shift if several columns):
            {sortedBy.length
              ? sortedBy.map(el => ` ${Object.keys(el)[0]}`)
              : null}
          </div>
          <div className="col-4 input-wrapper">
            <CheckBox
              id="active"
              defaultValue={activeOnly}
              changeHandle={activeCheckHandle}
              text="Active members only"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-8 del-button-wrap">
            Delete marked rows (mark with Ctrl)
            <button
              type="button"
              aria-label="delete"
              className="del-button"
              onClick={deleteButtonHandle}
            />
          </div>
          <div className="col-4 input-wrapper">
            <CheckBox
              id="virtualize"
              defaultValue={virtualize}
              changeHandle={virtualizeCheckHandle}
              text="Use virtualization"
            />
          </div>
        </div>
        <div className="row mt-3">a</div>
      </form>
    </div>
  )
}

export default Header
