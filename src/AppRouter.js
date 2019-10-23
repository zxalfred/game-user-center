import React, { memo } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Home from '@/pages/home'
import Bind from '@/pages/bind'
import SwitchPage from '@/pages/switch'
import Protocol from '@/pages/protocol'
import Login from '@/pages/login'
import ForgetPwd from '@/pages/forgetPwd'

export default memo(() => (
  <Router>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/bind" component={Bind} />
      <Route path="/switch" component={SwitchPage} />
      <Route path="/protocol" component={Protocol} />
      <Route path="/login" component={Login} />
      <Route path="/forget-pwd" component={ForgetPwd} />
      <Redirect from="*" to="/home" />
    </Switch>
  </Router>
))
