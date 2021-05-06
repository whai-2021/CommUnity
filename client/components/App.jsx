<<<<<<< HEAD
import '../index.css'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SignIn from './SignIn'
import Register from './Register'
import NewsFeed from './NewsFeed'
import WhatsHappening from './WhatsHappening'
import Information from './Information'
import GetSupport from './GetSupport'
import GroupPage from './GroupPage'
import PageLinks from './PageLinks'

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/register' component={Register} />
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
||||||| 43b1416
import '../index.css'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SignIn from './SignIn'
import Register from './Register'
import NewsFeed from './NewsFeed'
import WhatsHappening from './WhatsHappening'
import Information from './Information'
import GetSupport from './GetSupport'
import GroupPage from './GroupPage'

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/newsfeed' component={NewsFeed} />
        <Route exact path='/whatshappening' component={WhatsHappening} />
        <Route exact path='/information' component={Information} />
        <Route exact path='/getsupport' component={GetSupport} />
        <Route exact path='/whatshappening/:id' component={GroupPage} />

      </Router>
    </div>
  )
}

export default App
=======
import '../index.css'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SignIn from './SignIn'
import Register from './Register'
import NewsFeed from './NewsFeed'
import WhatsHappening from './WhatsHappening'
import Information from './Information'
import GetSupport from './GetSupport'
import GroupPage from './GroupPage'

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/newsfeed' component={NewsFeed} />
        <Route exact path='/whatshappening' component={WhatsHappening} />
        <Route exact path='/information' component={Information} />
        <Route exact path='/getsupport' component={GetSupport} />
        <Route exact path='/whatshappening/:id' component={GroupPage} />

      </Router>
    </div>
  )
}

export default App
>>>>>>> main
