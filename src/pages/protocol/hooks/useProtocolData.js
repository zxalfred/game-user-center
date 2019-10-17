import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useISelector } from '@/utils/hooks'
import { getUrlQuery } from '@/utils'
import { setLoading } from '@/store/actionCreators'
import { actionCreators } from '../store'

export default function useProtocolData() {
  const protocolData = useISelector((state) => state.getIn(['protocol', 'protocolData'])).toJS()
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const getProtocolData = async () => {
      const type = getUrlQuery('type', location.search)
      const action = actionCreators.getProtocolData(type)
      dispatch(setLoading(true))
      await dispatch(action)
      dispatch(setLoading(false))
    }
    getProtocolData()
  }, [location])

  return protocolData
}
