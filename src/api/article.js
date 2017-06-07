import fetch from '../utils/fetch';


export function postArticle(articleData) {
  
  return fetch.post('/tags',articleData);

}


