import React from 'react'
import PropTypes from 'prop-types'
import { saveCSV } from '../../utils'

const SaveButton = ({ data }) => {
  const clickHandle = () => {
    saveCSV(data)
  }

  return (
    <div className="col-auto align-self-end">
      <button
        type="button"
        onClick={clickHandle}
        className="btn btn-sm btn-primary"
      >
        Save to CSV
      </button>
    </div>
  )
}

SaveButton.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
}

export default SaveButton
