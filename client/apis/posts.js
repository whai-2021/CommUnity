import request from 'superagent'
const rootUrl = '/api/v1/posts'

export function getPostsByGroup (groupId) {
  return request
    .get(rootUrl + '/?groupId=' + groupId)
    .then(res => res.body)
}

export function getPostsByTag (tagId) {
  return request
    .get(rootUrl + '/?tag=' + tagId)
    .then(res => res.body)
}

export function getPostTags (postId) {
  return request
    .get(rootUrl + '/' + postId + '/tags')
    .then(res => res.body)
}

export function createPost (post, tags) {
  return request
    .post(rootUrl)
    .send({ post, tags })
    .then(res => res.body)
}

export function deletePost (postId) {
  return request
    .delete(rootUrl + `/${postId}`)
    .then(res => res.body)
}
