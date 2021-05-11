import request from 'superagent'

const rootUrl = '/api/v1/auth'

export function loginUser (user) {
  return request
    .post(rootUrl + '/login')
    .send({
      username: user.username,
      password: user.password
    })
    .then(res => res.body)
}

export function registerUser (user) {
  return request
    .post(rootUrl + '/register')
    .send({
      first_name: user.firstName,
      last_name: user.lastName,
      username: user.username,
      password_hash: user.password,
      email: user.email
    })
    .then(res => res.body)
}

export function getUser () {
  return request
    .get(rootUrl + '/user')
    .then(res => res.body)
}

export function logOffUser () {
  return request
    .delete(rootUrl + '/logout')
    .then(res => res.body)
}
