import '../index.css'
import React, { useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './screens/Home'
import SignIn from './screens/SignIn'
import Register from './screens/Register'
import MyAccount from './screens/MyAccount'
import NewsFeed from './screens/NewsFeed'
import WhatsHappening from './screens/WhatsHappening'
import Information from './Information'
import GetSupport from './screens/GetSupport'
import GroupPage from './screens/GroupPage'
import PageLinks from './PageLinks'
import Emergency from './inside information/Emergency'
import EnglishSchools from './inside information/EnglishSchools'
import Family from './inside information/Family'
import Health from './inside information/Health'
import Important from './inside information/Important'
import Transport from './inside information/Transport'
import Dropdown from './Dropdown'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // if you have a ton of exact routes think about using Switch from react-router-dom
  return (
    <div>
      <Router>
        <Nav toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/myAccount' component={MyAccount} />
          <Route path='/newsfeed' component={NewsFeed} />
          <Route exact path='/whatshappening' component={WhatsHappening} />
          <Route exact path='/information' component={Information} />
          <Route path='/getsupport' component={GetSupport} />
          <Route path='/whatshappening/:id' component={GroupPage} />
          <Route path='/pagelinks' component={PageLinks} />
          <Route path='/information/emergency' component={Emergency} />
          <Route path='/information/english' component={EnglishSchools} />
          <Route path='/information/family' component={Family} />
          <Route path='/information/health' component={Health} />
          <Route path='/information/important' component={Important} />
          <Route path='/information/transport' component={Transport} />
        </Switch>

      </Router>
    </div>
  )
}

export default App
