import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { ROW_HEIGHT, OTHER_HEIGHT } from '../../constants'
import {
  markSingleRow,
  unMarkSingleRow,
  unMarkNextRow,
  markNextRow,
} from '../../actions'
import TableString from '../TableString'

const TableBody = ({ data, scrollHandle, sHeight }) => {
  const dispatch = useDispatch()
  const scroll = useSelector(state => state.vrt.offset)
  const wrapHeight = useSelector(state => state.vrt.height) - OTHER_HEIGHT || 0
  const virtualize = useSelector(state => state.vrt.virtualize)
  const { marked } = useSelector(state => state.data)
  const { show } = useSelector(state => state)

  const renderQty = wrapHeight / ROW_HEIGHT + 3

  const getShift = () => {
    if (scroll === 0) return 0
    return scroll < data.length - renderQty ? scroll : data.length - renderQty
  }

  const shift = getShift()

  const renderPart = virtualize ? data.slice(shift, shift + renderQty) : data

  const tableTop = Math.min(
    scroll * ROW_HEIGHT,
    sHeight - renderQty * ROW_HEIGHT
  )

  useEffect(() => localStorage.setItem('show', JSON.stringify(show)))

  const clickHandle = e => {
    e.preventDefault()
    const { id } = e.currentTarget.dataset
    if (!e.ctrlKey || !marked.length) {
      if (marked.includes(id)) {
        dispatch(unMarkSingleRow(id))
      } else {
        dispatch(markSingleRow(id))
      }
    } else if (marked.includes(id)) {
      dispatch(unMarkNextRow(id))
    } else {
      dispatch(markNextRow(id))
    }
  }

  return (
    <div
      onScroll={scrollHandle}
      className="border table-wrapper"
      style={{ height: wrapHeight }}
    >
      <div
        style={virtualize ? { height: sHeight, position: 'relative' } : null}
      >
        <table
          className="table table-hover table-sm table-body"
          style={
            virtualize
              ? {
                  position: 'absolute',
                  top: tableTop > 0 ? tableTop : 0,
                }
              : null
          }
        >
          <colgroup>
            <col className="table-col-1" />
            {show.rank ? <col className="table-col-2" /> : null}
            {show.name ? <col className="table-col-3" /> : null}
            {show.mail ? <col className="table-col-4" /> : null}
            {show.avatar ? <col className="table-col-5" /> : null}
            {show.day ? <col className="table-col-6" /> : null}
            {show.active ? <col className="table-col-7" /> : null}
            {show.address ? <col className="table-col-8" /> : null}
          </colgroup>
          <tbody>
            {renderPart.map(string => (
              <TableString
                key={string.id}
                string={string}
                marked={marked}
                show={show}
                clickHandle={clickHandle}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

TableBody.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  scrollHandle: PropTypes.func.isRequired,
  sHeight: PropTypes.number.isRequired,
}

export default TableBody
