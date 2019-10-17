import React, { memo } from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom'

import Home from '@/pages/home'
import Bind from '@/pages/bind'
import SwitchPage from '@/pages/switch'
import Protocol from '@/pages/protocol'
import Login from '@/pages/login'

export default memo(() => (
  <Router>
    <Route path="/home" component={Home} />
    <Route path="/bind" component={Bind} />
    <Route path="/switch" component={SwitchPage} />
    <Route path="/protocol" component={Protocol} />
    <Route path="/login" component={Login} />
  </Router>
));