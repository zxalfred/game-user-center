import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const IconFont = React.forwardRef((props, ref) => {
  const { type } = props

  useEffect(() => {
    console.log('effect')
  })

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
