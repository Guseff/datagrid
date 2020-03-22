import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ROW_HEIGHT } from '../../constants'

import TableBody from '../TableBody'
import TableHead from '../TableHead/TableHead'
import { putOffset, setWindowSize } from '../../actions/offset'
import { sortElements } from '../../utils'
import SaveButton from '../SaveButton'
import QueryButton from '../QueryButton'

const TableMain = () => {
  const dispatch = useDispatch()

  const updateWindowSize = () => {
    const h = window.innerHeight
    dispatch(setWindowSize(h))
  }

  useEffect(() => {
    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  const data = useSelector(state => state.data.main)
  const { sort, filter } = useSelector(state => state)
  const { filterIfActive, filterByText, filterByDays } = filter

  const dataAfterActiveFilter = filterIfActive
    ? data.filter(string => string.isActive)
    : data

  const dataAfterTextFilter = filterByText
    ? dataAfterActiveFilter.filter(
        string =>
          string.name.toLowerCase().includes(filterByText.toLowerCase()) ||
          string.email.toLowerCase().includes(filterByText.toLowerCase()) ||
          string.address.city
            .toLowerCase()
            .includes(filterByText.toLowerCase()) ||
          string.address.street
            .toLowerCase()
            .includes(filterByText.toLowerCase())
      )
    : dataAfterActiveFilter

  const dataAfterDaysFilter =
    filterByDays && filterByDays.length > 0
      ? dataAfterTextFilter.filter(string =>
          filterByDays.split(',').includes(string.day.value)
        )
      : dataAfterTextFilter

  const sortedData = sort.length
    ? sortElements(dataAfterDaysFilter, sort)
    : dataAfterDaysFilter

  useEffect(() => {
    localStorage.setItem('sort', JSON.stringify(sort))
    localStorage.setItem('filter', JSON.stringify(filter))
  })

  const scrollHandle = e => {
    e.preventDefault()
    const scrollX = e.target.scrollLeft
    const scrollY = Math.min(
      Math.floor(e.target.scrollTop / ROW_HEIGHT),
      sortedData.length * ROW_HEIGHT
    )
    dispatch(putOffset(scrollY, scrollX))
  }

  return (
    <div>
      <TableHead />
      <TableBody
        scrollHandle={scrollHandle}
        data={sortedData}
        sHeight={sortedData.length * ROW_HEIGHT}
      />
      <div className="container row mt-2">
        <div className="col font-weight-bold">{`Total ${sortedData.length} rows`}</div>
      </div>
      <div className="container row mt-3">
        <QueryButton />
        <SaveButton data={sortedData} />
      </div>
    </div>
  )
}

export default TableMain
