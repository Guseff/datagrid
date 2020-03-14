import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({ id, defaultValue, changeHandle, text }) => {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={defaultValue}
        className="mr-1"
        onChange={changeHandle}
      />
      <span className="text-muted">{text}</span>
    </label>
  )
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool.isRequired,
  changeHandle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default CheckBox
