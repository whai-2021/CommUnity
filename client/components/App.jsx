import '../index.css'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
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

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/myAccount' component={MyAccount} />
        <Route exact path='/newsfeed' component={NewsFeed} />
        <Route exact path='/whatshappening' component={WhatsHappening} />
        <Route exact path='/information' component={Information} />
        <Route exact path='/getsupport' component={GetSupport} />
        <Route exact path='/whatshappening/:id' component={GroupPage} />
        <Route exact path='/pagelinks' component={PageLinks} />

      </Router>
    </div>
  )
}

export default App
