import Layout from '../layout/Layout'
const articleIndex = resolve => require(['./index'], resolve);
// 文章添加
const articleAdd = resolve => require(['./add'], resolve);

export var a = {
    
    name:'文章',
    path: '/article',
    component:Layout,
    redirect: '/article/index',
    children: [
        { path: 'index', component: articleIndex, name: '列表'},
        { path: 'add', component: articleAdd, name: '添加'}
    ]
    
}

export var b = {
    
    name:'文章1',
    path: '/article1',
    component:Layout,
    redirect: '/article1/index',
    children: [
        { path: 'index', component: articleIndex, name: '列表'},
        { path: 'add', component: articleAdd, name: '添加'}
    ]
    
}