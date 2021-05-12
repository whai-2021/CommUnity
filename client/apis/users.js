import request from 'superagent'

const rootUrl = '/api/v1/users'

export function updateUser (userId, user) {
  return request
    .patch(rootUrl + '/' + userId)
    .send({ first_name: user.firstName, last_name: user.lastName, email: user.email })
}
