import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 布局文件
const Layout = resolve => require(['../view/layout/Layout'], resolve);


// 文章列表
const articleIndex = resolve => require(['../view/article/index'], resolve);
// 文章添加
const articleAdd = resolve => require(['../view/article/add'], resolve);


const Login = resolve => require(['../view/login/index'], resolve);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
     { path: '/login', component: Login, hidden: true },
     { name:'首页', component: Layout,  redirect: '/article', path: '/' },
     { 
       name:'文章',
       path: '/article',
       component:Layout,
       redirect: '/article/index',
       children: [
         { path: 'index', component: articleIndex, name: '列表'},
         { path: 'add', component: articleAdd, name: '添加'}
        ]
     },
     { path: '*', redirect: '/login'}
  ]
})
