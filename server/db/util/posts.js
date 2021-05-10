const database = require('../connection')

const getPosts = (db = database) => {
  return db('posts').select()
}

const getPostsByGroup = (groupId, db = database) => {
  return db('posts')
    .join('users', 'users.id', 'posts.author_id')
    .select('*', 'posts.id as id')
    .where('group_id', groupId)
}

const getPostTags = (postId, db = database) => {
  return db('tags')
    .select()
    .where('post_id', postId)
}

const getGroupPostsByTag = (tag, groupId, db = database) => {
  return db('posts')
    .join('tags', 'tags.post_id', 'posts.id')
    .select()
    .where('group_id', groupId)
    .andWhere('tag', tag)
}

const getPost = (id, db = database) => {
  return db('posts').where('id', id).select().first()
}

const addPost = ({ userId, groupId, body, createdAt }, db = database) => {
  return db('posts').insert({ author_id: userId, group_id: groupId, body, created_at: createdAt })
    .then((id) => getPost(id[0]))
}

// update post

const deletePost = (id, db = database) => {
  return db('posts').where('id', id).delete()
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  getPostsByGroup,
  getGroupPostsByTag,
  getPostTags
}
