import { postTag, postArticle } from '../../api/article'

const article = {
  state: {
    articleData: ''
  },

  mutations: {
      SET_ARTICLE ( state, data ){
          state.articleData = data;
      }
  },

  actions: {

    saveTag({ commit }, data ){
        return new Promise(( resolve, reject ) => {
            postTag(data).then( response => {
                resolve(response);
            }).catch( error => {
                reject(error);
            })
        })
    },

    saveArticle({ commit }, data ){
      return new Promise(( resolve, reject ) => {

          postArticle(data).then( response => {

            resolve(response);
          }).catch( error =>{

            reject(error);
          })


      })
    }

  }
};

export default article;