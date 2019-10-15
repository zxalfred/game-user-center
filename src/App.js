import React from 'react'
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'

import Home from '@/pages/home'

function App() {
  const loading = useSelector((state) => state.getIn(['global', 'loading']))

  return (
    <Spin spinning={loading}>
      <div className="app">
        <Router>
          <Route path="/home" component={Home}></Route>
        </Router>
      </div>
    </Spin>
  )
}

export default App
