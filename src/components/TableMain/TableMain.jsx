import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ROW_HEIGHT } from '../../constants'

import TableBody from '../TableBody'
import TableHead from '../TableHead/TableHead'
import { putOffset, setWindowSize } from '../../actions/offset'
import { sortElements } from '../../utils'
import SaveButton from '../SaveButton'

const TableMain = () => {
  const dispatch = useDispatch()

  const updateWindowSize = () => {
    const h = window.innerHeight
    dispatch(setWindowSize(h))
  }

  useEffect(updateWindowSize, [])
  window.addEventListener('resize', updateWindowSize)

  const data = useSelector(state => state.data.main)
  const { filterIfActive, filterByText, filterByDays } = useSelector(
    state => state.filter
  )
  const { sort } = useSelector(state => state)

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
    filterByDays && filterByDays.length
      ? dataAfterTextFilter.filter(string => filterByDays.includes(string.day))
      : dataAfterTextFilter

  const sortedData = sort.length
    ? sortElements(dataAfterDaysFilter, sort)
    : dataAfterDaysFilter

  const scrollHandle = e => {
    e.preventDefault()
    const d = e.target.scrollTop
    const s = Math.min(
      Math.floor(d / ROW_HEIGHT),
      sortedData.length * ROW_HEIGHT
    )
    dispatch(putOffset(s))
  }

  return (
    <div>
      <TableHead />
      <TableBody
        scrollHandle={scrollHandle}
        data={sortedData}
        sHeight={sortedData.length * ROW_HEIGHT}
      />
      <SaveButton data={sortedData} />
    </div>
  )
}

export default TableMain
