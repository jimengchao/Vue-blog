import md5 from 'md5';
import fetch from '../utils/fetch';

export function loginByEmail(username, password) {

  let data = { username, password }
  return fetch.post('/login',data);

}

export function logout() {
  return fetch.get('/login/logout');
}

export function isLogin() {
  return fetch.get('/login/islogin');
}

