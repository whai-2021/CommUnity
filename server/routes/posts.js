const express = require('express')
const router = express.Router()

const db = require('../db/util/posts')

// GET all posts
router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// GET post by Id
router.get('/:postId', (req, res) => {
  const postId = Number(req.params.postId)

  db.getPost(postId)
    .then(post => {
      res.json(post)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// GET posts by groupId
router.get('/group/:groupId', (req, res) => {
  const groupId = Number(req.params.groupId)

  db.getPostsByGroup(groupId)
    .then(posts => {
      res.json(posts.reverse())
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// GET posts for a specific tag in a group
router.get('/group/:groupId/:tagId', (req, res) => {
  const groupId = Number(req.params.groupId)
  const tagId = Number(req.params.tagId)
  db.getGroupPostsByTag(tagId, groupId)
    .then(posts => {
      res.json(posts.reverse())
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// POST create post
router.post('/', (req, res) => {
  const { post, tags } = req.body
  db.addPost(post, tags)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
})

// DELETE post
router.delete('/:postId', (req, res) => {
  const postId = Number(req.params.postId)
  db.deletePost(postId)
    .then(() => {
      return db.deletePostTags(postId)
    })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

router.post('/saved/:postId', (req, res) => {
  const { postId } = req.params
  const { userId } = req.body
  db.savePostToUser(postId, userId)
    .then(() => {
      res.status(200).send()
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
      return null
    })
})

module.exports = router
