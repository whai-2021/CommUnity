const path = require('path')
const express = require('express')
const cors = require('cors')
const passportRoute = require('./routes/passport')
const groupsRoute = require('./routes/groups')
const usersRoute = require('./routes/users')
const postsRoute = require('./routes/posts')
const tagsRoute = require('./routes/tags')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/auth', passportRoute)
server.use('/api/v1/users', usersRoute)
server.use('/api/v1/posts', postsRoute)
server.use('/api/v1/groups', groupsRoute)
server.use('/api/v1/tags', tagsRoute)

module.exports = server
