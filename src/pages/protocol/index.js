import React, { memo } from 'react'
import useProtocolData from './hooks/useProtocolData'

function Protocol(props) {
  const protocolData = useProtocolData()
  console.log(props)
  return (
    <div dangerouslySetInnerHTML={{ __html: protocolData.content }} />
  )
}

export default memo(Protocol)
