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
      return db.deletePostsVotes(postId)
    })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// GET a posts votes
router.get('/:postId/votes', (req, res) => {
  const postId = Number(req.params.postId)
  const userId = Number(req.body.userId)
  db.getPostsVotes(postId)
    .then((votes) => {
      const upVotes = votes.filter((vote) => {
        return vote.vote_type === 'upVote'
      })
      const downVotes = votes.filter((vote) => {
        return vote.vote_type === 'downVote'
      })
      const userVote = votes.find((vote) => {
        return vote.author_id === userId
      })
      console.log(upVotes, downVotes)
      res.json({ upVotes: upVotes.length, downVotes: downVotes.length, userVote })
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// PUT a vote
router.put('/:postId/votes', (req, res) => {
  const postId = Number(req.params.postId)
  const { userId, voteType } = req.body
  db.addVote({ post_id: postId, author_id: userId, vote_type: voteType })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      console.log(e)
      res.status(500).send(e.message)
    })
})

// DELETE a vote
router.delete('/:postId/votes', (req, res) => {
  const postId = Number(req.params.postId)
  const { userId } = req.body
  db.deleteVote(userId, postId)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

module.exports = router
