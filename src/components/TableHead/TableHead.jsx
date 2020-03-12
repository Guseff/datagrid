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
  const { sort } = useSelector(state => state)
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

    if (!e.ctrlKey) {
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
    <div>
      <table className="table table-hover table-sm table-header">
        <colgroup>
          <col className="table-col-1" />
          <col className="table-col-2" />
          <col className="table-col-3" />
          <col className="table-col-4" />
          <col className="table-col-5" />
          <col className="table-col-6" />
          <col className="table-col-7" />
          <col className="table-col-8" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <button type="button" data-id="rank" onClick={buttonHandle}>
                {`Rank ${rankArr}`}
              </button>
            </th>
            <th scope="col">
              <button type="button" data-id="name" onClick={buttonHandle}>
                {`Name ${nameArr}`}
              </button>
            </th>
            <th scope="col">E-mail</th>
            <th scope="col">Avatar</th>
            <th scope="col">Address</th>
            <th scope="col">
              <button type="button" data-id="day" onClick={buttonHandle}>
                {`Day ${dayArr}`}
              </button>
            </th>
            <th scope="col">Active</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default TableHead
