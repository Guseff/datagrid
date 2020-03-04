import React from 'react'
import PropTypes from 'prop-types'

const MainTable = ({ data }) => {
  return (
    <table className="table table-striped table-hover table-sm">
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
      <tbody>
        {data.map(string => (
          <tr key={string.id.toString()}>
            <th scope="row">{string.id}</th>
            <td>{string.rank}</td>
            <td>{string.name}</td>
            <td>{string.email}</td>
            <td>
              <img
                alt=""
                src={string.avatar}
                style={{ width: '40px', borderRadius: '50%' }}
              />
            </td>
            <td>{string.city}</td>
            <td>{string.address}</td>
            <td>{string.isActive}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

MainTable.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default MainTable
