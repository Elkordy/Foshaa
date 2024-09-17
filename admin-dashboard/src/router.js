// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',  // This makes sure the app uses history API to remove the hash from URLs
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});

