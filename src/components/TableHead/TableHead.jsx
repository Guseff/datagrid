import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArrow } from '../../utils'
import {
  sortOne,
  sortGroupAdd,
  sortReset,
  sortGroupChange,
  sortGroupRemove,
} from '../../actions'

const TableHead = () => {
  const dispatch = useDispatch()
  const { show, sort } = useSelector(state => state)
  const { scrollX } = useSelector(state => state.vrt)
  const styleString = `translateX(-${scrollX}px)`

  const byRank = sort.find(el => 'rank' in el)
    ? sort.find(el => 'rank' in el).rank
    : undefined
  const byName = sort.find(el => 'name' in el)
    ? sort.find(el => 'name' in el).name
    : undefined
  const byDay = sort.find(el => 'day' in el)
    ? sort.find(el => 'day' in el).day
    : undefined

  const rankArr = getArrow(byRank)
  const nameArr = getArrow(byName)
  const dayArr = getArrow(byDay)

  const buttonHandle = e => {
    const key = e.currentTarget.dataset.id
    if (!sort.length) {
      dispatch(sortOne(key, 'inc'))
      return
    }

    if (!e.shiftKey) {
      if (!sort[0][key]) {
        dispatch(sortOne(key, 'inc'))
      } else if (sort[0][key] === 'inc') {
        dispatch(sortOne(key, 'dec'))
      } else {
        dispatch(sortReset())
      }
      return
    }

    const index = sort.indexOf(sort.find(el => Object.keys(el).includes(key)))
    if (index === -1) {
      dispatch(sortGroupAdd(key, 'inc'))
    } else if (sort[index][key] === 'inc') {
      dispatch(sortGroupChange(key, 'dec'))
    } else {
      dispatch(sortGroupRemove(key))
    }
  }

  return (
    <div className="head-wrapper">
      <div className="top-left">#</div>
      <table
        className="table table-hover table-sm table-header"
        style={{ transform: styleString }}
      >
        <colgroup>
          <col className="table-col-1" />
          {show.rank ? <col className="table-col-2" /> : null}
          {show.name ? <col className="table-col-3" /> : null}
          {show.mail ? <col className="table-col-4" /> : null}
          {show.avatar ? <col className="table-col-5" /> : null}
          {show.day ? <col className="table-col-6" /> : null}
          {show.active ? <col className="table-col-7" /> : null}
          {show.address ? <col className="table-col-8" /> : null}
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className="sticky">
              <div className="">#</div>
            </th>
            {show.rank ? (
              <th scope="col">
                <button type="button" data-id="rank" onClick={buttonHandle}>
                  {`Rank ${rankArr}`}
                </button>
              </th>
            ) : null}
            {show.name ? (
              <th scope="col">
                <button type="button" data-id="name" onClick={buttonHandle}>
                  {`Name ${nameArr}`}
                </button>
              </th>
            ) : null}
            {show.mail ? <th scope="col">E-mail</th> : null}
            {show.avatar ? <th scope="col">Avatar</th> : null}
            {show.day ? (
              <th scope="col">
                <button type="button" data-id="day" onClick={buttonHandle}>
                  {`Day ${dayArr}`}
                </button>
              </th>
            ) : null}
            {show.active ? <th scope="col">Active</th> : null}
            {show.address ? <th scope="col">Address</th> : null}
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default TableHead
