import Vue from 'vue'
import Router from 'vue-router'

import Article from '../view/article'

Vue.use(Router)

// 布局文件
const Layout = resolve => require(['../view/layout/Layout'], resolve);


// 文章列表
const articleIndex = resolve => require(['../view/article/index'], resolve);
// 文章添加
const articleAdd = resolve => require(['../view/article/add'], resolve);


const Login = resolve => require(['../view/login/index'], resolve);
console.log(Article)
export default new Router({
  mode:'history',
  routes: [
     { path: '/login', component: Login, hidden: true },
     { name:'首页', component: Layout,  redirect: '/article', path: '/' },
     ...Article,
     { path: '*', redirect: '/login'}
  ]
})
