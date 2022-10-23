// 1. 引入路由创建函数
import { createWebHistory, createRouter } from "vue-router";

// 2. 路由配置
const routes = [
  {
    path: '/home', component: () => import('../pages/home/Home.vue')
  },
  {
    path: '/blogs', component: () => import('../pages/Blogs.vue')
  },
  {
    path: '/summary', component: () => import('../pages/Summary.vue')
  },
  {
    path: '/about', component: () => import('../pages/about.vue')
  },
  {
    path: '/contact', component: () => import('../pages/Contact.vue')
  },
  // 重定向使用
  {
    path: '/',
    redirect: '/home'
  },
]

// 3.路由实例
const router = createRouter({ //插件路由对象
  // routes:routes
  routes,
  history: createWebHistory(), // 路由模式为必传项
});

// 4.导出路由实例，让他去控制vue根
export default router