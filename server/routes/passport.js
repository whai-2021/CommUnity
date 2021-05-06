if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.router()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const initializePassport = require('./passport-config')
initializePassport(passport)

const users = require('../db/untils/users')

router.use(flash())
// might need to use true for resave and saveUnlimited
router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

router.use(passport.initialize())
router.use(passport.session())

router.get('/user', (req, res) => {
  res.json(req.user)
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) res.json('No User Exists')
    else {
      req.logIn(user, err => {
        if (err) throw err
        res.json('Successfully Authenticated')
      })
    }
  })(req, res, next)
})

router.post('/register', (req, res) => {
  const { firstName, lastName, username, password } = req.body

  users.userExists(username)
    .then(user => {
      if (!user) {
        // eslint-disable-next-line promise/no-nesting
        users.createUser(firstName, lastName, username, password)
          .then(() => {
            res.json('user created')
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
