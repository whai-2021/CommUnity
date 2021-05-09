const express = require('express')
const router = express.Router()

const db = require('../db/util/groups')

// GET all groups and get User groups
router.get('/', (req,res) => {
  const userId = Number(req.query.userId)

  if (userId) {
    db.getUsersGroups(userId)
      .then((groups) => {
        res.json(groups)
      })
      .catch(err => {
        console.log(err.message)
        res.sendStatus(500)
      })
  } else {
    db.getGroups()
      .then(groups => {
        res.json(groups)
      })
      .catch(err => {
        res.sendStatus(500)
        console.log(err.message)
      })
  }
})


// GET specific group
router.get('/:groupId', (req,res) => {
  const groupId = Number(req.params.groupId)

  db.getGroupById(groupId)
    .then(group => {
      res.json(group)
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// POST group
router.post('/', (req,res) => {
  const { name, regionId } = req.body

  db.addGroup({name, regionId})
    .then((group) => {
      res.json(group)
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
      console.log(groupId)
      db.getGroupMembers(groupId)
        .then((members) => {
          const promises = members.map((member) =>
            db.removeMemberFromGroup(member.id, groupId)
          )
          Promise.all(promises)
            .then(() => {
                res.sendStatus(200)
              })
              .catch(err => {
                res.sendStatus(500)
                console.log(err.message)
              })
        })
        .catch(err => {
          res.sendStatus(500)
          console.log(err.message)
        })
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// PUT add a user to a group
router.put('/:groupId/members', (req,res) => {
  const groupId = Number(req.params.groupId)
  const {userId} = req.body

  db.addMemberToGroup(userId, groupId)
    .then((group) => {
      res.json(group)
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// GET members of a group
router.get('/:groupId/members', (req,res) => {
  const groupId = Number(req.params.groupId)

  db.getGroupMembers(groupId)
    .then((members) => {
      res.json(members)
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

//DELETE user from a group
router.delete('/:id/members', (req, res) => {
  const id = Number(req.params.id)
  const {userId} = req.body

  db.removeMemberFromGroup(userId, id)
    .then(() => {
      db.getGroupMembers(id)
        .then(members => {
          res.json(members)
        })
        .catch(err => {
          console.log(err.message)
          res.sendStatus(500)
        })
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

module.exports = router