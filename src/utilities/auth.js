import {request} from "./callAPI";


// authentication method for logining and signing up 
// login authentication
export function login({username_or_email, password}) {
  return request({method: 'post', path: 'auth/sign_in', payload: {username_or_email, password}})
}

// sign up 
export function signup({username, email, password, repeat_password}) {
  return request({
    method: 'post',
    path: 'auth/sign_up',
    payload: {username, email, password, repeat_password}
  })
}