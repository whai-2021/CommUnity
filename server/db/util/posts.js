const database = require('../connection')

const { tagExists, getTag, addTagToPost, addTag } = require('./tags')

const getPosts = (db = database) => {
  return db('posts').select()
}

const getPostsByGroup = (groupId, db = database) => {
  return db('posts')
    .join('users', 'users.id', 'posts.author_id')
    .select('*', 'posts.id as id')
    .where('group_id', groupId)
}

const getGroupPostsByTag = (tag, groupId, db = database) => {
  return db('posts')
    .join('post_tags', 'post_tags.post_id', 'posts.id')
    .join('tags', 'tags.id', 'post_tags.tag_id')
    .select()
    .where('group_id', groupId)
    .andWhere('tag', tag)
}

const getPost = (id, db = database) => {
  return db('posts').where('id', id).select().first()
}

const addPost = ({ userId, groupId, body, createdAt }, tags, db = database) => {
  // function too big, etract helper functions to make it simpler
  return db('posts').insert({ author_id: userId, group_id: groupId, body, created_at: createdAt })
    .then(postId => {
      if (tags) {
        // I would pull this whole block out into a stand alone function like addTagsToPost(tags)
        const promises = tags.map((tag) => {
          tagExists(tag)
            .then(tagExists => {
              if (tagExists) {
                // extract this block into a separate function
                // e.g. addExistingTagToPost(tagId, postId)
                getTag(tag)
                  .then((tagRes) => {
                    addTagToPost({ tagId: tagRes.id, postId })
                      .then(() => {
                        return null
                      })
                      .catch(e => {
                        console.log(e.message)
                      })
                    return null
                  })
                  .catch(e => {
                    console.log(e.message)
                  })
              } else {
                // extract to own function
                // e.g. addNewTagToPost(tag, postId)
                addTag(tag)
                  .then(tagId => {
                    addTagToPost({ tagId, postId })
                      .then(() => {
                        return null
                      })
                      .catch(e => {
                        console.log(e.message)
                      })
                    return null
                  })
                  .catch(e => {
                    console.log(e.message)
                  })
              }
              return null
            })
            .catch(e => {
              console.log(e.message)
            })
          return null
        })
        Promise.all(promises)
          .then(() => {
            return null
          })
          .catch(e => {
            console.log(e.message)
          })
      }
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
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
  getGroupPostsByTag
}
