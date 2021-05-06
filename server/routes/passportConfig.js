const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const users = require('../db/util/users')

function initialize (passport) {
  passport.use(new LocalStrategy(async (username, password, done) => {
    const user = users.getUserbyUsername(username)

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' })
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Incorrect password.' })
      }
    } catch (error) {
      return done(error)
    }
  }))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, users.getUserById(id))
  })
}

module.exports = initialize
