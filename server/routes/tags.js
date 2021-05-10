const express = require('express')
const router = express.Router()

const db = require('../db/util/tags')

// GET a posts tags
router.get('/:postId', (req, res) => {
  const postId = Number(req.params.postId)
  db.getPostTags(postId)
    .then((tags) => {
      res.json(tags)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// GET a groups tags
router.get('/group/:groupId', (req, res) => {
  const id = Number(req.params.groupId)

  db.getGroupsTags(id)
    .then(tags => {
      res.json(tags.filter((tag, index, arr) => {
        return arr.findIndex(item => (item.id === tag.id)) === index
      }))
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

module.exports = router
