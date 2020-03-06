import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { ROW_HEIGHT, OTHER_HEIGHT } from '../../constants'

const TableBody = ({ data, scrollHandle, sHeight }) => {
  const scroll = useSelector(state => state.vrt.offset)
  const wrapHeight = useSelector(state => state.vrt.height) - OTHER_HEIGHT
  const virtualize = useSelector(state => state.vrt.virtualize)

  const renderQty = wrapHeight / ROW_HEIGHT + 3

  const shift =
    scroll < data.length - renderQty ? scroll : data.length - renderQty
  const renderPart = virtualize ? data.slice(shift, shift + renderQty) : data

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
                  top: Math.min(
                    scroll * ROW_HEIGHT,
                    sHeight - renderQty * ROW_HEIGHT
                  ),
                }
              : null
          }
        >
          <colgroup>
            <col className="table-col-1" />
            <col className="table-col-2" />
            <col className="table-col-3" />
            <col className="table-col-4" />
            <col className="table-col-5" />
            <col className="table-col-6" />
            <col className="table-col-7" />
            <col className="table-col-8" />
          </colgroup>
          <tbody>
            {renderPart.map(string => (
              <tr key={string.id.toString()}>
                <th scope="row">{string.id}</th>
                <td>{string.rank}</td>
                <td>{string.name}</td>
                <td>{string.email}</td>
                <td>
                  <img alt="" src={string.avatar} />
                </td>
                <td>{string.city}</td>
                <td>{string.address}</td>
                <td>{string.isActive ? 'Yes' : 'No'}</td>
              </tr>
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
