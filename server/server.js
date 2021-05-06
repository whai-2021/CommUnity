const path = require('path')
const express = require('express')
const cors = require('cors')
const passportRoute = require('./routes/passport')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/auth', passportRoute)

module.exports = server
