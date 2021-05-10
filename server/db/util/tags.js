const database = require('../connection')

// oi, you reading this, write me some tests. so you didn't write this code huh? It don't matter, testing is everyone's business

const getPostTags = (postId, db = database) => {
  return db('post_tags')
    .join('tags', 'tags.id', 'post_tags.tag_id')
    .select('tag_id as id', 'tag', 'post_id')
    .where('post_id', postId)
    .then(res => {
      // this is redundant, just delete the then block
      return res
    })
}

const addTag = (tag, db = database) => {
  return db('tags')
    .insert({ tag: tag.toLowerCase() })
    .then(id => id) // same here
}

const addTagToPost = ({ tagId, postId }, db = database) => {
  return db('post_tags')
    .insert({ tag_id: tagId, post_id: postId })
    .then((tagId) => tagId) // also redundant
}

const tagExists = (tag, db = database) => {
  return db('tags')
    .count('id as n')
    .where('tag', tag)
    .then(count => {
      return count[0].n > 0 // this is ane example of when you do need a then
    })
}

const getTag = (tag, db = database) => {
  return db('tags')
    .select()
    .where('tag', tag.toLowerCase())
    .first() // look ma, no then. Nice.
}

module.exports = {
  addTag,
  addTagToPost,
  tagExists,
  getTag,
  getPostTags
}
