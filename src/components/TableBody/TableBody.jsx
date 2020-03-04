import React from 'react'
import PropTypes from 'prop-types'

const TableBody = ({ data }) => {
  return (
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
          <td>
            <input
              type="checkbox"
              className="form-check-input"
              checked={string.isActive}
              readOnly
            />
          </td>
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default TableBody
