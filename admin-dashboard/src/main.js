// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this path is correct

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

