import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TableBody from '../TableBody'
import TableHead from '../TableHead/TableHead'
import putOffset from '../../actions/offset'

const TableMain = () => {
  const data = useSelector(state => state.data)
  const filter = useSelector(state => state.filter.filterIfActive)
  const scroll = useSelector(state => state.offset.offset)

  const dispatch = useDispatch()

  const actualData = filter ? data.filter(string => string.isActive) : data

  const scrollHandle = e => {
    const d = e.target.scrollTop
    console.log(d, d / 35)
    dispatch(putOffset(Math.floor(d / 35)))
  }

  const renderPart = actualData.slice(scroll, scroll + 30)

  return (
    <>
      <TableHead />
      <TableBody scrollHandle={scrollHandle} data={renderPart} />
    </>
  )
}

export default TableMain
