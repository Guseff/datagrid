import React from 'react'
import { useSelector } from 'react-redux'

import TableBody from '../TableBody'

const TableMain = () => {
  const data = useSelector(state => state.data)
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Rank</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Avatar</th>
          <th scope="col">City</th>
          <th scope="col">Address</th>
          <th scope="col">Is Active</th>
        </tr>
      </thead>
      <TableBody data={data} />
    </table>
  )
}

export default TableMain
