import fetch from '../utils/fetch';


export function postArticle(articleData) {
  console.log(articleData);
  
  return fetch.post('/tags',articleData);;

}


