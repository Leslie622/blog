import Vue from 'vue'
import Admin from './admin.vue'
import router from "../../router/admin"

// 引入elementUI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* 引入animate.css库 */
import 'animate.css';

// vue背景特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

//引入markdowm编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 全局配置
Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(Admin),
  router,
}).$mount('#admin')

