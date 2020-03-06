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
  const filter = useSelector(state => state.filter.filterIfActive)

  const actualData = filter ? data.filter(string => string.isActive) : data

  const scrollHandle = e => {
    e.preventDefault()
    const d = e.target.scrollTop
    const s = Math.min(
      Math.floor(d / ROW_HEIGHT),
      actualData.length * ROW_HEIGHT
    )
    dispatch(putOffset(s))
  }

  return (
    <>
      <TableHead />
      <TableBody
        scrollHandle={scrollHandle}
        data={actualData}
        sHeight={actualData.length * ROW_HEIGHT}
      />
    </>
  )
}

export default TableMain
