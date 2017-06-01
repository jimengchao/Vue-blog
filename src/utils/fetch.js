import axios from 'axios';
import qs from 'qs';
import md5 from 'md5';
import { Message } from 'element-ui';
import store from '../store';
// import router from '../router';


axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8360/api';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// request拦截器
axios.interceptors.request.use(config => {

	if(config.method  === 'post'){
		if( config.data.password ){
	    	config.data.password = md5(config.data.password);
	    }
	    config.data = qs.stringify(config.data);
	}

	// if (store.getters.token) {
		// config.headers['M-Token'] = store.getters.token; 
	// }
	
	return config;

}, error => {
  console.log(error); 
  Promise.reject(error);
})


axios.interceptors.response.use(res =>{

  if(res.data.code != '200'){
    console.log('状态不对' );
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  console.log("网络异常");
  return Promise.reject(error);
});

export default axios;