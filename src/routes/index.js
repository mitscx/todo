import Vue from 'vue';
import VueRouter from 'vue-router'
import ShowNews from '../pages/ShowNews';
import About from '../pages/About';
import FOS from '../pages/FOS';
import Main from '../pages/Main';
import NewsOne from '../pages/NewsOne';
import Page404 from '../pages/Page404';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/news',
      name: 'news.show',
      component: ShowNews
    },
    {
      path: '/news/:id',
      name: 'news.one',
      component: NewsOne,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/fos',
      name: 'fos',
      component: FOS
    },
    {
      path: '*',
      component: Page404
    }
  ]
});
