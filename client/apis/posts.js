import request from 'superagent'
const rootUrl = '/api/v1/posts'

export function getPostsByGroup (groupId) {
  return request
    .get(rootUrl + '/group/' + groupId)
    .then(res => res.body)
}

export function getPostsByTag (tagId, groupId) {
  return request
    .get(rootUrl + '/group/' + groupId + '/' + tagId)
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

export function savePost (postId, userId) {
  return request
    .post(rootUrl + `/saved/${postId}`)
    .send({ userId })
}

export function unsavePost (postId, userId) {
  return request
    .delete(rootUrl + `/saved/${postId}`)
    .send({ userId })
}

export function hasUserSavedPost (postId, userId) {
  return request
    .get(rootUrl + `/saved/${postId}/${userId}/`)
    .then(res => res.body)
}
