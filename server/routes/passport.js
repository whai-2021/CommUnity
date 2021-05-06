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
// might need to use true for resave and saveUnitialized
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

// need to make a log out route

router.post('/register', (req, res) => {
  const newUser = req.body
  users.userExists(newUser.username)
    .then(user => {
      if (!user) {
        // eslint-disable-next-line promise/no-nesting
        users.addUser(newUser)
          .then(() => {
            res.json('User Created')
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

module.exports = router
