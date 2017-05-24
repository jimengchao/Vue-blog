import fetch from '../utils/fetch';
export function loginByEmail(username, password) {

  let data = { username, password }

  return fetch({
    url: '/login',
    method: 'post',
    data
  });
  
}

