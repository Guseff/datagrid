import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ROW_HEIGHT } from '../../constants'

import TableBody from '../TableBody'
import TableHead from '../TableHead/TableHead'
import { putOffset, setWindowSize } from '../../actions/offset'

const TableMain = () => {
  const dispatch = useDispatch()

  const updateWindowSize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    dispatch(setWindowSize(w, h))
  }
  updateWindowSize()
  window.addEventListener('resize', updateWindowSize)

  const data = useSelector(state => state.data)
  const { filterIfActive, filterByText, filterByDays } = useSelector(
    state => state.filter
  )
  const { byRank } = useSelector(state => state.sort)

  const dataAfterActiveFilter = filterIfActive
    ? data.filter(string => string.isActive)
    : data

  const dataAfterTextFilter = filterByText
    ? dataAfterActiveFilter.filter(
        string =>
          string.name.toLowerCase().startsWith(filterByText.toLowerCase()) ||
          string.email.toLowerCase().startsWith(filterByText.toLowerCase()) ||
          string.address.city
            .toLowerCase()
            .startsWith(filterByText.toLowerCase()) ||
          string.address.street
            .toLowerCase()
            .startsWith(filterByText.toLowerCase())
      )
    : dataAfterActiveFilter

  const dataAfterDaysFilter = filterByDays.length
    ? dataAfterTextFilter.filter(string => filterByDays.includes(string.day))
    : dataAfterTextFilter

  const sortedByRankData = byRank
    ? [...dataAfterDaysFilter].sort((a, b) =>
        byRank === 'inc' ? a.rank - b.rank : b.rank - a.rank
      )
    : dataAfterDaysFilter

  const scrollHandle = e => {
    e.preventDefault()
    const d = e.target.scrollTop
    const s = Math.min(
      Math.floor(d / ROW_HEIGHT),
      sortedByRankData.length * ROW_HEIGHT
    )
    dispatch(putOffset(s))
  }

  return (
    <>
      <TableHead />
      <TableBody
        scrollHandle={scrollHandle}
        data={sortedByRankData}
        sHeight={sortedByRankData.length * ROW_HEIGHT}
      />
    </>
  )
}

export default TableMain
