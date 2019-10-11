import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom'
import store from '@/store'

import Home from '@/pages/home'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/home" component={Home}></Route>
        </Router>
      </div>
    </Provider>
  )
}

export default App
