import Vue from 'vue'
import Blog from './Blog.vue'

// 引入并使用elementUI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* 引入animate.css库 */
import 'animate.css';

Vue.config.productionTip = false
new Vue({
  render: h => h(Blog),
}).$mount('#blog')
