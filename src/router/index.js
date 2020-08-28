import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const BlogHome = () => import('../pages/index/home/BlogHome.vue')
const MainBlog = () => import('../pages/index/mainblog/MainBlog.vue')
const Diary = () => import('../pages/index/diary/Diary.vue')
const Mark = () => import('../pages/index/mark/Mark.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: BlogHome
  },
  {
    path: '/mainblog',
    component: MainBlog
  },
  {
    path: '/diary',
    component: Diary
  },
  {
    path: '/mark',
    component: Mark
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router