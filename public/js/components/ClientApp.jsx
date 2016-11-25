import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import store from '../store'
import { Provider } from 'react-redux'

import Home from './Home'

const myRoutes = () => (
  <Route path='/' component={Home} />
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
}

export default App
