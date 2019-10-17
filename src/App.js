import React, { useEffect } from 'react'
import { Spin } from 'antd'
import AppRouter from './AppRouter';
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '@/pages/home/store'
import { setLoading } from '@/store/actionCreators'

function App() {
  const loading = useSelector((state) => state.getIn(['global', 'loading']))
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

  return (
    <Spin spinning={loading}>
      <div className="app">
        <AppRouter />
      </div>
    </Spin>
  )
}

export default App
