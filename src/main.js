import Vue from 'vue'
import Blog from './Blog.vue'
import router from "./router/index"

//引入markdowm编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 引入并使用elementUI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入animate.css库 
import 'animate.css';

// 阿里图标库
import "common/iconfont"

// 全局配置
Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

//vuex
import store from "./store/index"

new Vue({
  render: h => h(Blog),
  router,
  store
}).$mount('#blog')
