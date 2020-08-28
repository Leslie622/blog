import Vue from 'vue'
import admin from './admin.vue'
import router from "../../router/admin"

// 引入并使用elementUI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* 引入animate.css库 */
import 'animate.css';

// vue背景特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

// 全局配置
Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(admin),
  router
}).$mount('#admin')
