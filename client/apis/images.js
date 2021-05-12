import request from 'superagent'
const rootUrl = '/api/v1/images'

export function uploadPostImage (image, postId) {
  return request
    .post(`${rootUrl}/${postId}`)
    .attach('image', image)
    .then(res => res.body)
}

export function getPostsImage (postId) {
  return request
    .get(`${rootUrl}/${postId}`)
    .responseType('blob')
    .ok(res => res.status < 204)
    .then(res => res.body)
}

export function uploadGroupImage (image, groupId) {
  return request
    .post(`${rootUrl}/group/${groupId}`)
    .attach('image', image)
    .then(res => res.body)
}

export function getGroupsImage (groupId) {
  return request
    .get(`${rootUrl}/group/${groupId}`)
    .responseType('blob')
    .ok(res => res.status < 204)
    .then(res => res.body)
}
