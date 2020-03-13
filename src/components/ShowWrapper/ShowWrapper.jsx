import React from 'react'
import PropTypes from 'prop-types'

const ShowWrapper = ({ showCol, children }) => {
  return <>{showCol ? { children } : null}</>
}

ShowWrapper.propTypes = {
  showCol: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default ShowWrapper
