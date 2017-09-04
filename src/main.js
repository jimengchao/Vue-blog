
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './styles/common.scss'

Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	console.log(to,from);
	next();
	// store.dispatch('isLogin').then(data => {
	// 	if( data.data.status != 1 ){
	// 		next('/login')
	// 	}

	// 	console.log(data);
	// })

	// next();

	// if( to.path === '/login' ){
	// 	store.getters.token ? next('/') : next();
	// }else{
	// 	store.getters.token ? next() : next('/login');
	// }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
