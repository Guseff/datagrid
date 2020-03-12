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
          <div className="offset-8 col-4 input-wrapper">
            <input
              type="checkbox"
              defaultChecked={activeOnly}
              className="mr-3"
              onChange={activeCheckHandle}
            />
            <span className="text-muted">Active members only</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="offset-8 col-4 input-wrapper">
            <label htmlFor="virtualize">
              <input
                id="virtualize"
                type="checkbox"
                defaultChecked={virtualize}
                className="mr-3"
                onChange={virtualizeCheckHandle}
              />
              <span className="text-muted">Use virtualization</span>
            </label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-8">
            Sorted by:
            {sortedBy.length
              ? sortedBy.map(el => ` ${Object.keys(el)[0]}`)
              : null}
          </div>
          <div className="col-4 del-button-wrap">
            Delete marked rows (mark with Ctrl)
            <button
              type="button"
              aria-label="delete"
              className="del-button"
              onClick={deleteButtonHandle}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Header
