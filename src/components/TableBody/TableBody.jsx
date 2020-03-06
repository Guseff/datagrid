import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { ROW_HEIGHT } from '../../constants'

const TableBody = forwardRef(
  ({ data, scrollHandle, sHeight, wrapHeight, scroll, renderQty }, ref) => {
    return (
      <div
        ref={ref}
        onScroll={scrollHandle}
        className="border table-wrapper"
        style={{ height: wrapHeight }}
      >
        <div style={{ height: sHeight, position: 'relative' }}>
          <table
            className="table table-hover table-sm table-body"
            style={{
              position: 'absolute',
              top: Math.min(
                scroll * ROW_HEIGHT,
                sHeight - renderQty * ROW_HEIGHT
              ),
            }}
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
              {data.map(string => (
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
)

TableBody.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  scrollHandle: PropTypes.func.isRequired,
  sHeight: PropTypes.number.isRequired,
  wrapHeight: PropTypes.number.isRequired,
  scroll: PropTypes.number.isRequired,
  renderQty: PropTypes.number.isRequired,
}

export default TableBody
