import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path:'/login',
    name:'login',
    meta:{
      layout:'formlayout'
    },
    component:()=>import('../views/login.vue')
  },{
    path:'/news',
    name:'news',
    meta:{
      layout:'mainlayout'
    },
    component:()=>import('../views/news.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
