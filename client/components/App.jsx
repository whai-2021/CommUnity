import '../index.css'
import React, {useState, useEffect} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <div>
      <img src='/images/Logo.png' />
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
      </Router>
    </div>
  )
}

export default App
