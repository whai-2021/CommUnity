import '../index.css'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SignIn from './SignIn'
import Register from './Register'

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/register' component={Register} />
      </Router>
    </div>
  )
}

export default App
