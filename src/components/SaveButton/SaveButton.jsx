import React from 'react'
import PropTypes from 'prop-types'
import { saveSVG } from '../../utils'

const SaveButton = ({ data }) => {
  const clickHandle = () => {
    saveSVG(data)
  }

  return (
    <div className="row">
      <div className="offset-10 col-2 mt-4">
        <button
          type="button"
          onClick={clickHandle}
          className="btn btn-sm btn-primary"
        >
          Save to CSV
        </button>
      </div>
    </div>
  )
}

SaveButton.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
}

export default SaveButton
