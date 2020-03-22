import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { filterByText } from '../../actions'

const Search = ({ value }) => {
  const dispatch = useDispatch()

  const searchHandle = e => {
    e.preventDefault()
    dispatch(filterByText(e.target.value))
  }

  return (
    <>
      <label htmlFor="inputSearch" className="form-text text-muted">
        Search string in Name, e-mail or address
        <input
          type="text"
          value={value}
          className="form-control"
          id="inputSearch"
          onChange={searchHandle}
        />
      </label>
    </>
  )
}

Search.propTypes = {
  value: PropTypes.string,
}

Search.defaultProps = {
  value: '',
}

export default Search
