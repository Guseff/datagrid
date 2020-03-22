import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const TableString = ({ string, marked, show, clickHandle }) => {
  const bg = marked.includes(string.id.toString())
  return (
    <tr
      key={string.id.toString()}
      data-id={string.id}
      className={cn({
        'table-light': !bg,
        'table-dark': bg,
      })}
      onClick={clickHandle}
    >
      <th scope="row" className="sticky">
        {string.id}
      </th>
      {show.rank ? <td>{string.rank}</td> : null}
      {show.name ? <td>{string.name}</td> : null}
      {show.mail ? (
        <td>
          <div className="ellipsis">{string.email}</div>
        </td>
      ) : null}
      {show.avatar ? (
        <td>
          <img alt="" src={string.avatar} />
        </td>
      ) : null}
      {show.day ? <td>{string.day.label}</td> : null}
      {show.active ? <td>{string.isActive ? 'Yes' : 'No'}</td> : null}
      {show.address ? (
        <td>
          <div className="ellipsis">{`${string.address.street} ${string.address.city}`}</div>
        </td>
      ) : null}
    </tr>
  )
}

TableString.propTypes = {
  string: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }).isRequired,
    day: PropTypes.instanceOf(Object).isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  marked: PropTypes.instanceOf(Array).isRequired,
  show: PropTypes.instanceOf(Object).isRequired,
  clickHandle: PropTypes.func.isRequired,
}

export default TableString
