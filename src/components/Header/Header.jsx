import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterIfActive } from '../../actions/sort'

const Header = () => {
  const dispatch = useDispatch()

  const activeOnly = useSelector(state => state.filter.filterIfActive)

  const activeCheckHandle = () => {
    dispatch(filterIfActive(!activeOnly))
  }

  return (
    <div className="container my-3">
      <h3>RS School Test Table With Black Jack</h3>
      <form action="\">
        <div className="row">
          <div className="col-6">
            <span className="form-text text-muted">Search</span>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-6">
            <span className="form-text text-muted">Search</span>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="offset-8 col-4 input-wrapper">
            <input
              type="checkbox"
              defaultChecked={activeOnly}
              className="mr-3"
              onChange={activeCheckHandle}
            />
            <span className="text-muted">Active members only</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="offset-8 col-4 input-wrapper">
            <input type="checkbox" className="mr-3" />
            <span className="text-muted">Use virtualization</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Header
