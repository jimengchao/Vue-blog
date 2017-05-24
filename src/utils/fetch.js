import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
// import router from '../router';


axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8360/api';


// request拦截器
axios.interceptors.request.use(config => {
	config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  if (store.getters.token) {
    config.headers['M-Token'] = store.getters.token; 
  }
  return config;

}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

export default axios;