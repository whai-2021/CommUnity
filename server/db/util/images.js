const database = require('../connection')

const getPostsImage = (postId, db = database) => {
  return db('post_images').select('image').where('post_id', postId).first()
}

const addPostImage = (image, postId, db = database) => {
  return db('post_images').insert({ image, post_id: postId })
}

module.exports = {
  addPostImage,
  getPostsImage
}
