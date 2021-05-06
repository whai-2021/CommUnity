/* eslint-disable promise/no-callback-in-promise */
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const users = require('../db/util/users')

function initialize (passport) {
  passport.use(new LocalStrategy((username, password, done) => {
    users.getUserByUsername(username)
      .then(user => {
        if (!user) return done(null, false, { message: 'Invalid Username' })

        bcrypt.compare(password, user.password_hash, (err, result) => {
          if (err) throw err
          if (result === true) {
            return done(null, user)
          } else {
            return done(null, false, { message: 'Invalid Password' })
          }
        })
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, users.getUserById(id))
  })
}

module.exports = initialize
