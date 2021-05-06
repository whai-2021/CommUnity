const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const users = require('../db/untils/users')

export default function initialize (passport) {
  passport.use(new LocalStrategy(async (username, password, done) => {
    const user = users.userExists(username)

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
  passport.serialzeUser((user, done) => done(null, user.id))
  passport.deserialzeUser((id, done) => {
    return done(null, users.getUserById(id))
  })
}
