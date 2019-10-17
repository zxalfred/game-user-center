import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom'
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import { actionCreators } from '@/pages/home/store'

import Home from '@/pages/home'
import Bind from '@/pages/bind'
import SwitchPage from '@/pages/switch'
import Protocol from '@/pages/protocol'
import Login from '@/pages/login'

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserInfo = async () => {
      const action = actionCreators.getUserInfo()
      setLoading(true)
      await dispatch(action)
      setLoading(false)
    }
    getUserInfo()
  }, [])

  return (
    <Spin spinning={loading}>
      <div className="app">
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/bind" component={Bind} />
          <Route path="/switch" component={SwitchPage} />
          <Route path="/protocol" component={Protocol} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    </Spin>
  )
}

export default App
