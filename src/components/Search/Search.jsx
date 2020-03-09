import React from 'react'
import { useDispatch } from 'react-redux'

import { filterByText } from '../../actions'

const Search = () => {
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
          className="form-control"
          id="inputSearch"
          onChange={searchHandle}
        />
      </label>
    </>
  )
}

export default Search
