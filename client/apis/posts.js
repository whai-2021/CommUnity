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

export function createPost (post, tags, image) {
  return request
    .post(rootUrl)
    .send({ post, tags })
    .then(res => {
      if (image) {
        return uploadImage(image, res.body)
      } return res.body
    })
}

export function uploadImage (image, postId) {
  console.log(postId)
  return request
    .post(`/api/v1/images/${postId}`)
    .attach('image', image)
    .then(res => res.body)
}

export function deletePost (postId) {
  return request
    .delete(rootUrl + `/${postId}`)
    .then(res => res.body)
}

export function getPostsVotes (postId, userId) {
  return request
    .get(rootUrl + `/${postId}/votes?userId=${userId}`)
    .then(res => res.body)
}

export function addVote (postId, userId, voteType) {
  return request
    .put(rootUrl + `/${postId}/votes`)
    .send({ userId, voteType })
    .then(res => res.body)
}

export function deleteVote (postId, userId) {
  return request
    .delete(rootUrl + `/${postId}/votes`)
    .send({ userId })
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

export function getSavedPosts (userId) {
  return request
    .get(rootUrl + `/saved/${userId}`)
    .then(res => res.body)
}
