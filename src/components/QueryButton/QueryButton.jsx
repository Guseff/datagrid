import React from 'react'
import { useSelector } from 'react-redux'

import { makeQueryString } from '../../utils'

const QueryButton = () => {
  const { filterIfActive, filterByText, filterByDays } = useSelector(
    state => state.filter
  )
  const clickHandle = () => {
    const string = makeQueryString(filterIfActive, filterByText, filterByDays)
    window.location.search = string
  }

  return (
    <div className="col-auto mr-auto">
      Set current filter settings to querystring
      <button
        type="button"
        onClick={clickHandle}
        className="btn btn-sm btn-primary px-4 ml-3"
      >
        Set
      </button>
    </div>
  )
}

export default QueryButton
