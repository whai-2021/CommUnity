const express = require('express')
const router = express.Router()

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const db = require('../db/util/images')
const { uploadImage, downloadImage } = require('../s3')

// POST upload Image
router.post('/:postId', upload.single('image'), async (req, res) => {
  const postId = Number(req.params.postId)
  const file = req.file

  db.addPostImage(file.filename, postId)
    .then(() => {
      return uploadImage(file)
    })
    .then(() => {
      return unlinkFile(file.path)
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

// GET postsimage Image
router.get('/:postId', (req, res) => {
  const postId = Number(req.params.postId)

  db.getPostsImage(postId)
    .then(image => {
      const readStream = downloadImage(image.image)
      readStream.pipe(res)
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })

})

module.exports = router
