import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useISelector } from '@/utils/hooks'
import { getUrlQuery } from '@/utils'
import { setLoading } from '@/store/actionCreators'
import { actionCreators } from '../store'

export default function useProtocolData() {
  const protocolData = useISelector((state) => state.getIn(['protocol', 'protocolData']).toJS())
  const type = getUrlQuery('type')
  const dispatch = useDispatch()


  useEffect(() => {
    const getProtocolData = async () => {
      const action = actionCreators.getProtocolData(type)
      dispatch(setLoading(true))
      await dispatch(action)
      dispatch(setLoading(false))
    }
    getProtocolData()
  }, [])

  return protocolData
}
