import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'

import { DAYS } from '../../constants'
import {
  filterIfActive,
  toggleVirtualize,
  filterByDays,
  deleteStrings,
  showColumn,
} from '../../actions'

import Search from '../Search'
import CheckBox from '../CheckBox'

const Header = () => {
  const dispatch = useDispatch()

  const activeOnly = useSelector(state => state.filter.filterIfActive)
  const virtualize = useSelector(state => state.vrt.virtualize)
  const sortedBy = useSelector(state => state.sort)
  const { show } = useSelector(state => state)
  const { filterByText } = useSelector(state => state.filter)
  const selected = useSelector(state => state.filter.filterByDays)

  const activeCheckHandle = () => {
    dispatch(filterIfActive(!activeOnly))
  }

  const virtualizeCheckHandle = () => {
    dispatch(toggleVirtualize(!virtualize))
  }

  const selectChange = options => {
    dispatch(filterByDays(options))
  }

  const deleteButtonHandle = () => {
    dispatch(deleteStrings())
  }

  const showCheckHandle = e => {
    const id = e.currentTarget.id.slice(3)
    dispatch(showColumn(id, !show[id]))
  }

  return (
    <div className="container my-3">
      <h3>RS School Test Data Grid With Blackjack And Girls</h3>
      <form action="\">
        <div className="row">
          <div className="col-6">
            <Search value={filterByText} />
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
        <div className="row mt-1">
          <div className="col-8">
            Sorted by (press Shift if several columns):
            {sortedBy.length
              ? sortedBy.map(el => ` ${Object.keys(el)[0]}`)
              : null}
          </div>
          <div className="col-4 input-wrapper">
            <CheckBox
              id="ch-active-only"
              defaultValue={activeOnly}
              changeHandle={activeCheckHandle}
              text="Active members only"
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-8 del-button-wrap">
            <button
              type="button"
              aria-label="delete"
              className="btn btn-sm btn-primary del-button"
              onClick={deleteButtonHandle}
            >
              Delete
            </button>
            marked rows (mark with Ctrl)
          </div>
          <div className="col-4 input-wrapper">
            <CheckBox
              id="ch-virtualize"
              defaultValue={virtualize}
              changeHandle={virtualizeCheckHandle}
              text="Use virtualization"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="ml-3">Display / hide columns:</div>
          <div className="col">
            <CheckBox
              id="ch-rank"
              defaultValue={show.rank}
              changeHandle={showCheckHandle}
              text="Rank"
            />
          </div>
          <div className="col">
            <CheckBox
              id="ch-name"
              defaultValue={show.name}
              changeHandle={showCheckHandle}
              text="Name"
            />
          </div>
          <div className="col">
            <CheckBox
              id="ch-mail"
              defaultValue={show.mail}
              changeHandle={showCheckHandle}
              text="E-mail"
            />
          </div>
          <div className="col">
            <CheckBox
              id="ch-avatar"
              defaultValue={show.avatar}
              changeHandle={showCheckHandle}
              text="Avatar"
            />
          </div>
          <div className="col">
            <CheckBox
              id="ch-day"
              defaultValue={show.day}
              changeHandle={showCheckHandle}
              text="Day"
            />
          </div>
          <div className="col">
            <CheckBox
              id="ch-active"
              defaultValue={show.active}
              changeHandle={showCheckHandle}
              text="Active"
            />
          </div>
          <div className="col">
            <CheckBox
              id="ch-address"
              defaultValue={show.address}
              changeHandle={showCheckHandle}
              text="Address"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Header
