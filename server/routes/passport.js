if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
require('./passportConfig')(passport)

const users = require('../db/util/users')

router.use(flash())

router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

router.use(passport.initialize())
router.use(passport.session())

router.get('/user', (req, res) => {
  res.json(req.user)
})

router.post('/login', async (req, res, next) => {
  await passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) res.json(info.message)
    else {
      req.logIn(user, err => {
        if (err) throw err
        res.json('Successfully Authenticated')
      })
    }
  })(req, res, next)
})

router.post('/register', (req, res) => {
  const newUser = req.body
  users.userExists(newUser.username)
    .then(result => {
      if (result === false) {
        // instead of disabling the no-nesting you could return the promise and deal with it in a future then block
        // I would also be tempoted to make a helper function called addUserAndLogin (pass it the user and req.logIn as args) which would simplify this function
        // eslint-disable-next-line promise/no-nesting
        users.addUser(newUser)
          .then(user => {
            const userDetails = {
              id: user.id,
              username: user.username,
              first_name: user.first_name,
              last_name: user.last_name
            }
            req.logIn(userDetails, err => {
              if (err) throw err
              res.json('User Created')
            })
            return null
          })
          .catch(err => {
            console.log(err.message)
            return null
          })
        return null
      } else {
        res.json('username already exists')
        return null
      }
    })
    .catch(err => {
      console.log(err.message)
      return null
    })
})

router.delete('/logout', (req, res) => {
  req.logOut()
  res.json('Logged Out')
})

module.exports = router
