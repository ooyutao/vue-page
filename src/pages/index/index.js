// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './index.vue';
import router from './router';
import component from './component';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import utils from '@/utils';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 }); //UI插件
Vue.prototype.$utils = utils;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
