const express = require('express')
const router = express.Router()

const db = require('../db/util/groups')

// GET all groups
router.get('/', (req, res) => {
  db.getGroups()
    .then(groups => {
      res.json(groups)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// GET specific group
router.get('/:groupId', (req, res) => {
  const groupId = Number(req.params.groupId)

  db.getGroupById(groupId)
    .then(group => {
      res.json(group)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// GET Users groups
router.get('/user/:userId', (req, res) => {
  const userId = Number(req.query.userId)

  db.getUsersGroups(userId)
    .then((groups) => {
      res.json(groups)
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

// POST create a group
router.post('/', (req, res) => {
  const { name, regionId } = req.body

  db.addGroup({ name, regionId })
    .then((group) => {
      res.json(group)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// DELETE group
router.delete('/:groupId', (req, res) => {
  const groupId = Number(req.params.groupId)

  db.deleteGroup(groupId)
    .then(() => {
      return db.deleteAllGroupMembers(groupId)
    })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// PUT add a user to a group
router.put('/:groupId/members', (req, res) => {
  const groupId = Number(req.params.groupId)
  const id = Number(req.body.id)
  db.addMemberToGroup(id, groupId)
    .then((group) => {
      res.json(group)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// GET members of a group
router.get('/:groupId/members', (req, res) => {
  const groupId = Number(req.params.groupId)

  db.getGroupMembers(groupId)
    .then((members) => {
      res.json(members)
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

// DELETE user from a group
router.delete('/:groupId/members', (req, res) => {
  const groupId = Number(req.params.groupId)
  const { id } = req.body

  db.removeMemberFromGroup(id, groupId)
    .then(() => {
      // return promises like this instead of nesting them
      return db.getGroupMembers(groupId)
    })
    .then(members => {
      res.json(members)
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

module.exports = router
