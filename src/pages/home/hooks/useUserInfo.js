import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useISelector } from '@/utils/hooks'
import { actionCreators } from '../store'
import { setLoading } from '@/store/actionCreators'

export default function useUserInfo() {
  const userInfo = (useISelector((state) => state.getIn(['home', 'userInfo']))).toJS()
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserInfo = async () => {
      const action = actionCreators.getUserInfo()
      dispatch(setLoading(true))
      await dispatch(action)
      dispatch(setLoading(false))
    }
    getUserInfo()
  }, [])

  return userInfo
}
