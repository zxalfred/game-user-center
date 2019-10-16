import React from 'react'
import {
  BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'

import Home from '@/pages/home'
import Bind from '@/pages/bind'
import SwitchPage from '@/pages/switch'

function App() {
  const loading = useSelector((state) => state.getIn(['global', 'loading']))

  return (
    <Spin spinning={loading}>
      <div className="app">
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/bind" component={Bind} />
          <Route path="/switch" component={SwitchPage} />
          <Redirect path="*" to="/home" />
        </Router>
      </div>
    </Spin>
  )
}

export default App
