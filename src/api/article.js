import fetch from '../utils/fetch';


export function postTag(tagData) {

  return fetch.post('/tags',tagData);
}

export function postArticle(articleData){
	console.log(articleData);
	return fetch.post('/article', articleData);

}


