import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NotFound from './views/NotFound';


Vue.use(Router);

export default new Router({
  base: process.env.environment === 'development' ? '/' : '/softex-test-app/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
  mode: 'history',
});
