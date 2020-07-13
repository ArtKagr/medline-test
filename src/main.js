import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import { ClientTable } from 'vue-tables-2';
import axios from 'axios';
import config from '../config';
import store from './store';
import router from './Routes';

Vue.config.productionTip = false

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = "application/json";

Vue.use(BootstrapVue);
Vue.use(ClientTable, { theme: 'bootstrap4' });

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
