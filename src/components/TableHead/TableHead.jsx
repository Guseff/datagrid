import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortByRank, sortByName } from '../../actions'
import { getArrow } from '../../utils'

const TableHead = () => {
  const dispatch = useDispatch()
  const { byRank, byName } = useSelector(state => state.sort)

  const rankArr = getArrow(byRank)
  const nameArr = getArrow(byName)

  const rankButtonHandle = () => {
    if (!byRank) {
      dispatch(sortByRank('inc'))
    } else if (byRank === 'inc') {
      dispatch(sortByRank('dec'))
    } else {
      dispatch(sortByRank(undefined))
    }
  }

  const nameButtonHandle = () => {
    if (!byName) {
      dispatch(sortByName('inc'))
    } else if (byName === 'inc') {
      dispatch(sortByName('dec'))
    } else {
      dispatch(sortByName(undefined))
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
              <button type="button" onClick={rankButtonHandle}>
                {`Rank ${rankArr}`}
              </button>
            </th>
            <th scope="col">
              <button type="button" onClick={nameButtonHandle}>
                {`Name ${nameArr}`}
              </button>
            </th>
            <th scope="col">E-mail</th>
            <th scope="col">Avatar</th>
            <th scope="col">Address</th>
            <th scope="col">Day</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default TableHead
