import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const WriteBlog = () => import('../pages/admin/write-blog/WriteBlog.vue')
const WriteDiary = () => import('../pages/admin/write-diary/WriteDiary.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/admin.html/writeblog'
  },
  {
    path: '/admin.html/writeblog',
    component: WriteBlog
  },
  {
    path: '/admin.html/writediary',
    component: WriteDiary
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router