import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 文章列表

const articleIndex = resolve => require(['../view/article/index'], resolve);

export default new Router({
   scrollBehavior: () => ({ y: 0 }),
  routes: [
     { name:'首页', path: '/' },
     { name:'文章列表', path: '/article', component: articleIndex, hidden: true },
  ]
})
