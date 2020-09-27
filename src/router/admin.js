import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const WriteBlog = () => import('../pages/admin/write-blog/WriteBlog.vue')
const WriteDiary = () => import('../pages/admin/write-diary/WriteDiary.vue')
const ManagementPG = () => import("../pages/admin/ManagementPG/ManagementPG.vue")
const Detail = () => import("../pages/admin/detail/Detail.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin.html',
    redirect: '/admin.html/ManagementPG'
  },
  {
    path: '/admin.html/writeblog',
    name: "WriteBlog",
    component: WriteBlog
  },
  {
    path: '/admin.html/writediary',
    name: "WriteDiary",
    component: WriteDiary
  },
  {
    path: '/admin.html/ManagementPG',
    name: "ManagementPG",
    component: ManagementPG
  },
  {
    path: '/admin.html/Detail',
    name: "Detail",
    component: Detail,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router