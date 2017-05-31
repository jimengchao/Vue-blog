
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

	// if( store.getters.token ){
	// 	if( to.path === '/login' ){
	// 		next({ path: '/' })
	// 	}else{
			next();
	// 	}
	// }else{
	// 	next('/login')
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
