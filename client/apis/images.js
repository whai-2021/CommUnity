import request from 'superagent'
const rootUrl = '/api/v1/images'

export function uploadPostImage (image, postId) {
  console.log(postId)
  return request
    .post(`${rootUrl}/${postId}`)
    .attach('image', image)
    .then(res => res.body)
}

export function uploadGroupImage (image, groupId) {
  return request
    .post(`${rootUrl}/group/${groupId}`)
    .attach('image', image)
    .then(res => res.body)
}
