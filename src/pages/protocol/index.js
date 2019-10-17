import React from 'react'
import useProtocolData from './hooks/useProtocolData'

function Protocol() {
  const protocolData = useProtocolData()

  return (
    <div dangerouslySetInnerHTML={{ __html: protocolData.content }} />
  )
}

export default Protocol
