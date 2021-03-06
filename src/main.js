import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
import './assets/scss/common.scss'
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
//引入字体库
import '../src/assets/scss/font.scss'
//引入iconfont图标库
import './assets/fonts/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入echart
//4.x 引用方式
import echarts from 'echarts';
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
//import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
//axios请求
import requestApi from '@/http/requestApi';
import request from '@/http/api';
Vue.prototype.requestApi = requestApi;
Vue.prototype.request = request;
// 全局注册
Vue.component('icon', Icon);
Vue.use(dataV);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
