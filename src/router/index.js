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
    name: "BlogHome",
    component: BlogHome,
    meta: { title: 'Home | Leslie' }
  },
  {
    path: '/mainblog',
    name: "MainBlog",
    component: MainBlog,
    meta: { title: 'Blog | Leslie' }
  },
  {
    path: '/diary',
    name: "Diary",
    component: Diary,
    meta: { title: 'Diary | Leslie' }
  },
  {
    path: '/mark',
    name: "Mark",
    component: Mark,
    meta: { title: 'Mark | Leslie' }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title || '首页'
  }
  next()
})


export default router