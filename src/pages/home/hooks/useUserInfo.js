import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../store'
import { setLoading } from '@/store/actionCreators'

export default function useUserInfo() {
  const userInfo = (useSelector((state) => state.getIn(['home', 'userInfo']))).toJS()
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
