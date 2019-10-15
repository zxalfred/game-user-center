import React from 'react'
import PropTypes from 'prop-types'

const IconFont = React.forwardRef((props, ref) => {
  const { type } = props

  return (
    <svg className="icon" aria-hidden="true" ref={ref}>
      <use xlinkHref={`#icon${type}`}></use>
    </svg>
  )
})

IconFont.propTypes = {
  type: PropTypes.string.isRequired,
}

export default IconFont
