import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const BlogHome = () => import('../views/home/BlogHome.vue')
const MainBlog = () => import('../views/mainblog/MainBlog.vue')
const Diary = () => import('../views/diary/Diary.vue')
const Mark = () => import('../views/mark/Mark.vue')
const Detail = () => import('../views/detail/Detail.vue')

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
  {
    path: '/Detail',
    name: "Detail",
    component: Detail,
    meta: { title: 'Detail | Leslie' }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || '首页'
  }
  next()
})

export default router