import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TableBody from '../TableBody'
import TableHead from '../TableHead/TableHead'
import putOffset from '../../actions/offset'

const ROW_HEIGHT = 35
const RENDER_PART = 30

const TableMain = () => {
  const data = useSelector(state => state.data)
  const filter = useSelector(state => state.filter.filterIfActive)
  const scroll = useSelector(state => state.offset.offset)

  const dispatch = useDispatch()

  const actualData = filter ? data.filter(string => string.isActive) : data

  const scrollHandle = e => {
    const d = e.target.scrollTop
    const s = Math.min(
      Math.floor(d / ROW_HEIGHT),
      actualData.length * ROW_HEIGHT
    )
    dispatch(putOffset(s))
  }

  const shift =
    scroll < data.length - RENDER_PART ? scroll : data.length - RENDER_PART
  const renderPart = actualData.slice(shift, shift + RENDER_PART)

  return (
    <>
      <TableHead />
      <TableBody
        scrollHandle={scrollHandle}
        data={renderPart}
        sHeight={actualData.length * ROW_HEIGHT}
        scroll={scroll}
      />
    </>
  )
}

export default TableMain
