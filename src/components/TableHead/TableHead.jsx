import React from 'react'
// import { useSelector } from 'react-redux'
// import { UP_ARROW, DOWN_ARROW } from '../../constants'

const TableHead = () => {
  // const rankS = useSelector(state => state.sort.sortByRank)

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
              <button type="button">Rank</button>
            </th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Avatar</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default TableHead
