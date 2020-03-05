import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ROW_HEIGHT, RENDER_PART } from '../../constants'

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
  const scroll = useSelector(state => state.vrt.offset)
  const wrapHeight = useSelector(state => state.vrt.height) - 350

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
        wrapHeight={wrapHeight}
        scroll={scroll}
      />
    </>
  )
}

export default TableMain
